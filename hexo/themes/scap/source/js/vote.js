// vote.js 
// 依赖：
// 1) 弹窗里有：#movieModal 以及 #movieModal .vote-btn，内部有 .vote-count 和 .vote-remaining
// 2) 列表卡片结构：section.hot-movies#RankAnime/... 里面有 .carousel-container .card[data-title="..."]
// 3) 你打开弹窗时会把 #movieTitle / #movieInfo 填好（本文件只负责投票接口与按钮状态）
//
// 注意：category 只从 section id 取：RankAnime/RankComic/RankGame/RankNovel -> Anime/Comic/Game/Novel
// title 从被点击的 .card 的 data-title 

(() => {
  // 如果你项目里已经全局定义了 API_BASE，就不改它；否则默认空串（同域）
  const API_BASE = window.API_BASE || '';

  const MAX_PER_CAT = 3; // 仅用于前端初始显示；真实限制在后端

  function $(sel, root = document) { return root.querySelector(sel); }

  function getVoteBtn() {
    return $('#movieModal .vote-btn');
  }

  function categoryFromSectionId(sectionId) {
    // "RankAnime" -> "Anime"
    // "RankComic" -> "Comic"
    // "RankGame"  -> "Game"
    // "RankNovel" -> "Novel"
    const m = String(sectionId || '').match(/^Rank(Anime|Comic|Game|Novel)$/);
    return m ? m[1] : '';
  }

  function ensureUndo(btn){
  // 在 count 和 remaining 之间插一个 span 作为按钮
  let undo = btn.querySelector('.vote-undo');
  if (undo) return undo;

  undo = document.createElement('span');
  undo.className = 'vote-undo';
  undo.setAttribute('role', 'button');
  undo.setAttribute('tabindex', '0');
  undo.setAttribute('aria-label', '撤销一票');
  undo.title = '撤销一票';
  undo.textContent = '撤销';

  const countEl = btn.querySelector('.vote-count');
  if (countEl && countEl.parentNode) {
    countEl.insertAdjacentElement('afterend', undo);
  } else {
    btn.appendChild(undo);
  }
  return undo;
}


function setVoteUI(btn, data){
  const countEl = btn.querySelector('.vote-count');
  const remEl = btn.querySelector('.vote-remaining');

  const count = Number(data?.count ?? 0);
  const voted = !!data?.voted;
  const remaining = Number(data?.remaining ?? 0);

  if (countEl) countEl.textContent = String(count);
  if (remEl) remEl.textContent = remaining > 0 ? `剩余 ${remaining}` : `已用完`;

  // 插入/获取撤销按钮
  const undo = ensureUndo(btn);

  // 只有“该IP投过此title”才允许撤销（voted=true）
  // 且投票用完也不影响撤销（撤销应该永远可以）
  undo.classList.toggle('disabled', !voted);
  undo.setAttribute('aria-disabled', voted ? 'false' : 'true');

  btn.classList.toggle('voted', voted);
  btn.setAttribute('aria-pressed', voted ? 'true' : 'false');

  // 投票按钮：remaining=0 才禁用
  btn.classList.toggle('disabled', remaining <= 0);
}



  async function fetchVoteState(category, title) {
    const url = `${API_BASE}/api/vote/${encodeURIComponent(category)}?title=${encodeURIComponent(title)}`;
    const r = await fetch(url, { method: 'GET' });
    if (!r.ok) throw new Error('GET vote failed');
    return await r.json();
  }

  async function postVote(category, title) {
    const url = `${API_BASE}/api/vote/${encodeURIComponent(category)}?title=${encodeURIComponent(title)}`;
    const r = await fetch(url, { method: 'POST' });

    // 429：本类最多投 3 票
    if (r.status === 429) {
      let msg = `本类最多投 ${MAX_PER_CAT} 票`;
      try {
        const j = await r.json();
        if (j?.error) msg = j.error;
      } catch {}
      const err = new Error(msg);
      err.code = 429;
      throw err;
    }

    // 其他非 2xx
    if (!r.ok) {
      let msg = '投票失败';
      try {
        const j = await r.json();
        if (j?.error) msg = j.error;
      } catch {}
      const err = new Error(msg);
      err.code = r.status;
      throw err;
    }

    return await r.json();
  }

  async function deleteVote(category, title) {
  const url = `${API_BASE}/api/vote/${encodeURIComponent(category)}?title=${encodeURIComponent(title)}`;
  const r = await fetch(url, { method: 'DELETE' });

  if (!r.ok) {
    let msg = '撤销失败';
    try {
      const j = await r.json();
      if (j?.error) msg = j.error;
    } catch {}
    const err = new Error(msg);
    err.code = r.status;
    throw err;
  }

  return await r.json();
}


  // ===== 对外：打开弹窗后调用 initVote(category,title) 也行；或者让本文件自动从点击卡片拿 =====
  window.initVote = async function initVote({ category, title }) {
    const btn = getVoteBtn();
    if (!btn) return;

    const cat = String(category || '').trim();
    const t = String(title || '').trim();
    if (!cat || !t) return;

    btn.dataset.category = cat;
    btn.dataset.title = t;

    // 先重置 UI，避免上一次残留
    btn.disabled = false;
    setVoteUI(btn, { count: 0, voted: false, remaining: MAX_PER_CAT });

    try {
      const data = await fetchVoteState(cat, t);
      setVoteUI(btn, data);
    } catch (e) {
      // 网络失败：不阻塞，按钮仍可点（后端兜底）
    }
  };

  // ===== 1) 点击卡片时：自动算 category + title，并“初始化投票状态” =====
  document.addEventListener('click', (e) => {
    // 你截图里 card 是 div.card[data-title]
    const card = e.target.closest('section.hot-movies .carousel-container .card');
    if (!card) return;

    const section = card.closest('section.hot-movies');
    const category = categoryFromSectionId(section?.id);

    // title 优先用 data-title（你现在就有）
    const title = String(card.dataset.title || '').trim();

    if (!category || !title) return;

    // 你自己的弹窗打开逻辑应该在别处；这里不干预它，只负责“投票按钮状态”
    // 但如果你希望顺便把 modal 标题填了，也可以取消注释：
    // const mt = document.getElementById('movieTitle');
    // if (mt) mt.textContent = title;

    window.initVote({ category, title });
  });

  // ===== 2) 点击投票按钮：POST =====
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('#movieModal .vote-btn');
    if (!btn) return;

    const category = btn.dataset.category;
    const title = btn.dataset.title;
    if (!category || !title) return;

    // 如果 UI 已经判断用完，也不发（后端仍兜底 429）
    if (btn.classList.contains('disabled')) return;


    btn.disabled = true;
    try {
      const data = await postVote(category, title);
      setVoteUI(btn, data);
    } catch (err) {
      if (err && err.code === 429) {
        alert(err.message || `本类最多投 ${MAX_PER_CAT} 票`);
        // 拉一次 GET 刷新 remaining，避免 UI 不同步
        try {
          const data = await fetchVoteState(category, title);
          setVoteUI(btn, data);
        } catch {}
      } else {
        // 其他错误
        // 你也可以换成 toast
        alert(err?.message || '投票失败');
        // 失败则放开按钮（但别强制覆盖已投状态）
        if (!btn.disabled) btn.disabled = false; // 这行其实没意义
        btn.disabled = false;
      }
    }
  });

  // ===== 3) 点击撤销按钮：DELETE =====
document.addEventListener('click', async (e) => {
  const undo = e.target.closest('#movieModal .vote-btn .vote-undo');
  if (!undo) return;

  // disabled 状态不处理
  if (undo.classList.contains('disabled')) return;

  const btn = undo.closest('.vote-btn');
  if (!btn) return;

  const category = btn.dataset.category;
  const title = btn.dataset.title;
  if (!category || !title) return;

  undo.classList.add('loading');
  try {
    const data = await deleteVote(category, title);
    setVoteUI(btn, data);
  } catch (err) {
    alert(err?.message || '撤销失败');
    // 失败后刷新一次
    try {
      const data = await fetchVoteState(category, title);
      setVoteUI(btn, data);
    } catch {}
  } finally {
    undo.classList.remove('loading');
  }
});


})();


