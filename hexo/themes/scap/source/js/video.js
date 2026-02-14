/* =======================
   Video player controls
   ======================= */
function playVideo(src) {
  const container = document.getElementById('videoPlayerContainer');
  const player = document.getElementById('videoPlayer');
  player.src = src;
  player.play();
  container.style.display = 'flex';
}

function closePlayer() {
  const container = document.getElementById('videoPlayerContainer');
  const player = document.getElementById('videoPlayer');
  player.pause();
  player.src = '';
  container.style.display = 'none';
}

/* 默认聚焦的真实视频索引（从 0 起算，且不含左右 placeholder） */
const defaultIndex = 6;

/* =======================
   Helpers for cover flow
   ======================= */
function getCoverFlow() {
  return document.querySelector('.cover-flow');
}

function getAllItems() {
  const cf = getCoverFlow();
  return cf ? Array.from(cf.querySelectorAll('li')) : [];
}

function getVisibleItems() {
  return getAllItems().filter(li => !li.classList.contains('placeholder'));
}

function getCenteredAllIndex() {
  const cf = getCoverFlow();
  const items = getAllItems();
  if (!cf || !items.length) return -1;

  const containerCenter = cf.getBoundingClientRect().left + cf.clientWidth / 2;
  let idx = -1, best = Infinity;

  items.forEach((li, i) => {
    const r = li.getBoundingClientRect();
    const c = r.left + r.width / 2;
    const d = Math.abs(c - containerCenter);
    if (d < best) { best = d; idx = i; }
  });

  return idx;
}

function centerItem(item) {
  const cf = getCoverFlow();
  if (!cf || !item) return;
  const targetLeft = item.offsetLeft + item.offsetWidth / 2 - cf.clientWidth / 2;
  cf.scrollTo({ left: Math.max(0, targetLeft), behavior: 'smooth' });
}

/* 精确的上/下一个（适配变宽项） */
function scrollPrev() {
  const cf = getCoverFlow();
  if (!cf) return;

  const all = getAllItems();
  const vis = getVisibleItems();
  if (!vis.length) return;

  const centeredAllIdx = getCenteredAllIndex();
  if (centeredAllIdx < 0) return;

  const centeredEl = all[centeredAllIdx];
  let vIdx = vis.indexOf(centeredEl);

  if (vIdx === -1) {
    // 居中的是 placeholder，找最近的可见项
    const centerX = cf.getBoundingClientRect().left + cf.clientWidth / 2;
    let best = 0, bestD = Infinity;
    vis.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const d = Math.abs(c - centerX);
      if (d < bestD) { bestD = d; best = i; }
    });
    vIdx = best;
  }

  const prev = vIdx > 0 ? vis[vIdx - 1] : vis[0];
  centerItem(prev);
}

function scrollNext() {
  const cf = getCoverFlow();
  if (!cf) return;

  const all = getAllItems();
  const vis = getVisibleItems();
  if (!vis.length) return;

  const centeredAllIdx = getCenteredAllIndex();
  if (centeredAllIdx < 0) return;

  const centeredEl = all[centeredAllIdx];
  let vIdx = vis.indexOf(centeredEl);

  if (vIdx === -1) {
    const centerX = cf.getBoundingClientRect().left + cf.clientWidth / 2;
    let best = 0, bestD = Infinity;
    vis.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const c = r.left + r.width / 2;
      const d = Math.abs(c - centerX);
      if (d < bestD) { bestD = d; best = i; }
    });
    vIdx = best;
  }

  const next = vIdx < vis.length - 1 ? vis[vIdx + 1] : vis[vis.length - 1];
  centerItem(next);
}

/* =======================
   Dom Ready
   ======================= */
window.addEventListener('load', () => {
  const coverFlow = getCoverFlow();

  if (coverFlow) {
    // 初始化：把 defaultIndex（忽略左右占位）居中
    requestAnimationFrame(() => {
      const vis = getVisibleItems();
      if (vis.length) {
        const idx = Math.min(Math.max(defaultIndex, 0), vis.length - 1);
        centerItem(vis[idx]);
      }
      updateDescription(); // 初次同步描述 & 居中态
    });

    // 事件委托：只允许“居中项”的 .play-button 触发播放
    coverFlow.addEventListener('click', function (e) {
      if (e.target.classList.contains('play-button')) {
        const li = e.target.closest('li');
        if (li && li.classList.contains('centered')) {
          const src = e.target.dataset.src || li.dataset.src;
          if (src) playVideo(src);
        }
      }
    });
  }

  // 给非占位 li 注册点击：点击左右两侧卡片推动滚动（基于居中计算）
  getVisibleItems().forEach(item => {
    item.addEventListener('click', function (e) {
      if (e.target.classList.contains('play-button')) return;

      const cf = getCoverFlow();
      if (!cf) return;

      // 当前真正居中的项（允许 placeholder）
      const centeredAllIdx = getCenteredAllIndex();
      const all = getAllItems();
      const centered = centeredAllIdx >= 0 ? all[centeredAllIdx] : null;
      if (!centered) return;

      const thisRect = this.getBoundingClientRect();
      const centerRect = centered.getBoundingClientRect();

      if (thisRect.left < centerRect.left) {
        scrollPrev();
      } else if (thisRect.left > centerRect.left) {
        scrollNext();
      } else {
        // 刚好点在居中项上：不做滚动
      }
    });
  });

  /* 多个走马灯容器的左右箭头滚动（与你原逻辑相同） */
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const carouselContainer = carousel.querySelector('.carousel-container');
    const btnLeft = carousel.querySelector('.carousel-arrow.left');
    const btnRight = carousel.querySelector('.carousel-arrow.right');

    if (btnLeft && carouselContainer) {
      btnLeft.addEventListener('click', () => {
        carouselContainer.scrollBy({
          left: -carouselContainer.clientWidth,
          behavior: 'smooth'
        });
      });
    }
    if (btnRight && carouselContainer) {
      btnRight.addEventListener('click', () => {
        carouselContainer.scrollBy({
          left: carouselContainer.clientWidth,
          behavior: 'smooth'
        });
      });
    }
  });
  // 监听滚动：实时刷新“选中描述”
  if (coverFlow) {
    coverFlow.addEventListener('scroll', updateDescription, { passive: true });
  }
});
/* 点击卡片打开信息模态窗（事件委托：不等图片加载） */
document.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  // 如果你的 coverflow 里还有 play-button，不想点它弹窗，就拦一下
  if (e.target.classList.contains('play-button')) return;

  const title = card.dataset.title || '';
  const synopsis = card.dataset.synopsis || '';
  const rating = card.dataset.rating || '';
  const audience = card.dataset.audience || '';
  const cast = (card.dataset.cast || '').split(', ').filter(Boolean);
  const reviews = (card.dataset.reviews || '').split(' | ').filter(Boolean);
  const posterImg = card.querySelector('img');
  const poster = posterImg ? posterImg.src : '';

  const elTitle = document.getElementById('movieTitle');
  const elSynopsis = document.getElementById('movieSynopsis');
  const elRating = document.getElementById('movieRating');
  const elAudience = document.getElementById('movieAudience');
  const elPoster = document.getElementById('moviePoster');
  const castList = document.getElementById('movieCast');
  const reviewList = document.getElementById('movieReviews');

  if (elTitle) elTitle.textContent = title;
  if (elSynopsis) elSynopsis.textContent = synopsis;
  if (elRating) elRating.textContent = rating;
  if (elAudience) elAudience.textContent = audience;
  if (elPoster) elPoster.src = poster;

  if (castList) {
    castList.innerHTML = '';
    cast.forEach(actor => {
      const span = document.createElement('span');
      span.className = 'movie-modal-cast-member';
      span.textContent = actor;
      castList.appendChild(span);
    });
  }

  if (reviewList) {
    reviewList.innerHTML = '';
    reviews.forEach(review => {
      const p = document.createElement('p');
      p.className = 'movie-modal-review';
      p.textContent = review;
      reviewList.appendChild(p);
    });
  }

  // 评论 + 点赞（你原逻辑）
  if (typeof initMovieComments === 'function') {
    initMovieComments(title);
  }
  if (typeof initLike === 'function') {
    initLike(title);
  }
  // 如果你还有投票 initVote，也可以顺便放这
  if (typeof initVote === 'function') {
    // category 取 section id：RankAnime/RankComic/RankGame/RankNovel -> Anime/Comic/Game/Novel
    const section = card.closest('section.hot-movies');
    const m = (section?.id || '').match(/^Rank(Anime|Comic|Game|Novel)$/);
    const category = m ? m[1] : '';
    if (category && title) initVote({ category, title });
  }

  const modal = document.getElementById('movieModal');
  if (modal) modal.classList.add('show');
});

/* 关闭电影模态窗 */
function closeMovieModal() {
  const modal = document.getElementById('movieModal');
  if (modal) modal.classList.remove('show');
}

/* =======================
   Update description (no innerHTML)
   仅更新字段：title / content / link / tags
   ======================= */
// 作用域内的持久变量
let __descToken = 0;
let __lastCenteredId = null;
let __fadeListenerAttached = false;

function updateDescription() {
  const coverFlow = getCoverFlow?.();
  const desc = document.querySelector('.selected-description');
  if (!coverFlow || !desc) return;

  const headerEl  = desc.querySelector('.post-header');
  const metaEl    = desc.querySelector('.post-meta');
  const contentEl = desc.querySelector('.post-content');
  const linkEl    = desc.querySelector('.post-link');
  const tagsEl    = desc.querySelector('.post-tags');

  const items = (getAllItems?.() || []).filter(el => !el.classList.contains('placeholder'));
  if (!items.length) return;

  // 计算当前容器中心
  const containerRect = coverFlow.getBoundingClientRect();
  const center = containerRect.left + containerRect.width / 2;

  // 找最接近中心的项
  let closestItem = null;
  let minDistance = Infinity;
  for (const item of items) {
    const r = item.getBoundingClientRect();
    const itemCenter = r.left + r.width / 2;
    const d = Math.abs(center - itemCenter);
    if (d < minDistance) {
      minDistance = d;
      closestItem = item;
    }
  }
  if (!closestItem) return;

  const postId =
    closestItem.dataset.likeId ||
    closestItem.dataset.link ||
    closestItem.dataset.title ||
    'home';

  // 若中心项未变化，直接返回，避免重复淡出/淡入导致闪烁
  if (__lastCenteredId === postId) return;

  // 更新 .centered（只在变化时处理，减少重绘）
  const prevCentered = coverFlow.querySelector('li.centered');
  if (prevCentered && prevCentered !== closestItem) prevCentered.classList.remove('centered');
  closestItem.classList.add('centered');
  __lastCenteredId = postId;

  // 读取目标内容（先准备好，等待淡出完成再一次性写入）
  const title       = closestItem.dataset.title || '';
  const description = closestItem.dataset.description || '';
  const link        = closestItem.dataset.link || '';
  const tagsRaw     = closestItem.dataset.tags || '';
  const meta        = closestItem.dataset.meta || '';

  // 生成令牌，标记本轮更新
  const myToken = ++__descToken;

  // 监听一次 opacity 过渡结束后再写入（避免过期写入）
  const onFadeOutEnd = (evt) => {
    // 只关心 opacity 的过渡
    if (evt.propertyName !== 'opacity') return;
    // 只在仍是同一轮更新时写入
    if (myToken !== __descToken) return;

    // —— 真正写入 DOM（一次性）——
    if (headerEl)  headerEl.textContent    = title;
    if (metaEl)    metaEl.textContent      = meta;
    if (contentEl) contentEl.textContent   = description;

    if (linkEl) {
      if (link) {
        linkEl.href = link;
        linkEl.textContent = link;
        linkEl.removeAttribute('aria-disabled');
        linkEl.style.display = '';
      } else {
        linkEl.href = 'javascript:void(0)';
        linkEl.textContent = '';
        linkEl.setAttribute('aria-disabled', 'true');
        linkEl.style.display = 'none';
      }
    }

    if (tagsEl) {
      const parts = tagsRaw.split(/[,|\s]+/).filter(Boolean);
      // 先构建片段，减少重排
      const frag = document.createDocumentFragment();
      parts.forEach(t => {
        const span = document.createElement('span');
        span.className = 'tag-chip';
        span.textContent = t;
        frag.appendChild(span);
      });
      tagsEl.innerHTML = '';
      if (parts.length) tagsEl.appendChild(frag);
    }

    // 写入完成 -> 淡入
    desc.classList.remove('is-updating');

    // 点赞刷新（写入成功后）
    if (window.refreshLikeFor) {
      try { window.refreshLikeFor(postId); } catch (_) {}
    }
  };

  // 确保只绑定一次 transitionend 监听器（委托到 desc）
  if (!__fadeListenerAttached) {
    desc.addEventListener('transitionend', onFadeOutEnd);
    __fadeListenerAttached = true;
  } else {
    // 若已绑定，先移除再绑定，确保 handler 捕获最新闭包变量
    desc.removeEventListener('transitionend', onFadeOutEnd);
    desc.addEventListener('transitionend', onFadeOutEnd);
  }

  // 触发淡出（等过渡结束后写入，再自动淡入）
  // 注意：如果当前已经在 is-updating 状态，保持状态不变即可（不会重复触发）
  desc.classList.add('is-updating');
}

(() => {
  const API_BASE = '/api';

  // ========== ID 规范化 ==========
  function canonicalUrl(raw) {
    try {
      const u = new URL(raw, location.origin);
      u.hash = '';
      if ((u.protocol === 'http:' && u.port === '80') || (u.protocol === 'https:' && u.port === '443')) u.port = '';
      u.pathname = u.pathname.replace(/\/{2,}/g, '/').replace(/\/+$/, '');
      const params = [...u.searchParams.entries()].sort(([a],[b]) => a.localeCompare(b));
      u.search = params.length ? '?' + params.map(([k,v]) => `${k}=${v}`).join('&') : '';
      u.hostname = u.hostname.toLowerCase();
      return u.toString();
    } catch { return String(raw || '').trim(); }
  }
  function slug(s) {
    return String(s || '').toLowerCase().normalize('NFKC').replace(/\s+/g,'-').replace(/-+/g,'-').replace(/^-+|-+$/g,'');
  }
  window.normalizeLikeId = window.normalizeLikeId || function(raw) {
    if (!raw) return '';
    const s = String(raw).trim();
    if (/^(tmdb:|imdb:|bgm:|url:|title:)/i.test(s)) return s;
    if (/^tt\d+$/i.test(s)) return 'imdb:'+s.toLowerCase();
    if (/^\d{3,}$/.test(s)) return 'tmdb:movie:'+s;
    if (/^https?:\/\//i.test(s)) return 'url:'+canonicalUrl(s);
    return 'title:'+slug(s);
  };
  function stablePostIdFromMovie(m) {
    if (!m) return '';
    if (m.imdbId) return 'imdb:'+String(m.imdbId).toLowerCase();
    if (m.tmdbId) return 'tmdb:'+(m.type||'movie')+':'+String(m.tmdbId);
    if (m.bgmId)  return 'bgm:'+String(m.bgmId);
    if (m.url)    return 'url:'+canonicalUrl(m.url);
    const year = m.year || m.releaseYear || 'na';
    return 'title:'+slug(String(m.title||'unknown'))+':'+year;
  }

  // ========== 状态 ==========
  const state = { postId:null, loading:false, nextBefore:null, reachedEnd:false, seenIds:new Set() };
  let lastBox = null; // 记录上一次绑定过 scroll 的元素，避免重复

  // ========== DOM 工具 ==========
  function ensureScrollableBox() {
    let box = document.getElementById('movieReviews');
    if (!box) {
      // 若不存在，创建一个默认评论区塞到 .movie-modal-reviews 里
      const container = document.querySelector('.movie-modal-reviews');
      box = document.createElement('div');
      box.id = 'movieReviews';
      box.className = 'reviews-list';
      box.innerHTML = '<p class="empty">还没有评论，快来写第一条吧！</p>';
      container && container.insertBefore(box, container.querySelector('.reviews-footer'));
    }
    // 强制成为“可滚”容器
    box.classList.add('reviews-list');
    box.style.overflowY = 'auto';
    box.style.overscrollBehavior = 'contain';
    box.style.webkitOverflowScrolling = 'touch';
    return box;
  }
  function getDomRefs() {
    const box   = ensureScrollableBox();
    const hint  = document.getElementById('reviewsHint') || null;
    const modal = document.getElementById('commentModal') || null;
    const author= document.getElementById('commentAuthor') || null;
    const content = document.getElementById('commentContent') || null;
    const commentHint = document.getElementById('commentHint') || null;
    return { box, hint, modal, author, content, commentHint };
  }

  // ========== 小工具 ==========
  const esc = (s='') => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#39;");
  function fmtTime(str){ try{ return new Date(str.replace(' ','T')).toLocaleString(); }catch{ return str||'' } }
  function isScrollable(el){ return !!el && (el.scrollHeight > el.clientHeight + 1); }

  function renderComment(c){
    const { box } = getDomRefs();
    if (!box || state.seenIds.has(c.id)) return;
    state.seenIds.add(c.id);
    // 清空占位
    const empty = box.querySelector('.empty'); if (empty) empty.remove();
    const el = document.createElement('div');
    el.className = 'movie-comment';
    el.dataset.id = c.id;
    el.innerHTML = `
      <div class="meta">${esc(c.author || '匿名')} · ${esc(fmtTime(c.createdAt))}</div>
      <div class="content">${esc(c.content)}</div>
    `;
    box.appendChild(el);
  }

  async function fetchComments(){
    if (state.loading || state.reachedEnd || !state.postId) return;
    const { box, hint } = getDomRefs();
    if (!box) return;

    state.loading = true;
    box.setAttribute('data-loading','1');
    if (hint) hint.textContent = '加载中…';

    const qs = new URLSearchParams();
    qs.set('limit','20');
    if (state.nextBefore) qs.set('before', String(state.nextBefore));

    try {
      const r = await fetch(`${API_BASE}/comment/${encodeURIComponent(state.postId)}?${qs.toString()}`);
      if (!r.ok) throw new Error('加载失败');
      const data = await r.json();
      (data.comments || []).forEach(renderComment);
      state.nextBefore = data.nextBefore || null;
      if (!state.nextBefore || (data.comments||[]).length === 0) state.reachedEnd = true;
      if (hint) hint.textContent = state.reachedEnd ? '评论区就这么长了, 期待你的见解！' : '';
    } catch (e) {
      console.error(e);
      if (hint) hint.textContent = '加载失败';
    } finally {
      state.loading = false;
      box.removeAttribute('data-loading');
    }
  }

  function maybeLoadMore(){
    const { box } = getDomRefs();
    if (!box || state.loading || state.reachedEnd) return;
    const nearBottom = box.scrollTop + box.clientHeight >= box.scrollHeight - 80;
    if (nearBottom) fetchComments();
  }

  // 首屏“补货”：连续拉几页，直到出现滚动条或到底
  async function fetchUntilScrollable(maxRounds=5){
    const { box } = getDomRefs();
    for (let i=0; i<maxRounds; i++){
      await fetchComments();
      if (!box) break;
      if (isScrollable(box) || state.reachedEnd) break;
    }
  }

  // ========== 对外：初始化 ==========
  window.initMovieComments = function(input){
    let postId = '';
    if (typeof input === 'string') postId = window.normalizeLikeId(input);
    else if (input && typeof input === 'object') postId = stablePostIdFromMovie(input);
    state.postId = String(postId || '');
    state.loading = false;
    state.nextBefore = null;
    state.reachedEnd = false;
    state.seenIds.clear();

    const { box, hint } = getDomRefs();
    if (box) box.innerHTML = '<p class="empty">加载中…</p>';
    if (hint) hint.textContent = '';

    // 绑定滚动监听（防重复）
    if (lastBox && lastBox !== box) lastBox.removeEventListener('scroll', maybeLoadMore);
    if (box) {
      box.removeEventListener('scroll', maybeLoadMore);
      box.addEventListener('scroll', maybeLoadMore, { passive:true });
      lastBox = box;
    }

    if (state.postId) fetchUntilScrollable(5);
  };

  window.initMovieCommentsFromEl = function(el){
    if (!el) return window.initMovieComments('');
    const raw = el.dataset.postId || el.dataset.likeId || el.dataset.url || el.getAttribute('href') || el.dataset.title || '';
    return window.initMovieComments(raw);
  };

  // ========== 写评论弹窗 ==========
  function openCommentModal(){
    const { modal, author, content, commentHint } = getDomRefs();
    if (!modal) return;
    if (!state.postId) {
      const { hint } = getDomRefs();
      if (hint){ hint.textContent = '未找到影片 ID，无法发表评论'; setTimeout(()=>hint.textContent='',1500); }
      return;
    }
    if (commentHint) commentHint.textContent = '';
    if (author) author.value = author.value || '';
    if (content) content.value = '';
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
    content && content.focus();
  }
  function closeComment(){
    const { modal } = getDomRefs();
    if (!modal) return;
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden','true');
  }

  // 用事件委托，避免节点还没挂载时绑定失败
  document.addEventListener('click', (e) => {
    const t = e.target;
    if (t && t.id === 'openCommentBtn') openCommentModal();
    if (t && (t.id === 'closeCommentModal' || t.id === 'cancelCommentBtn')) closeComment();
    // 点击遮罩关闭
    if (t && t.id === 'commentModal') closeComment();
  });
  document.addEventListener('keydown', (e) => {
    const { modal } = getDomRefs();
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') closeComment();
  });

  // 提交评论（审核制）
  document.addEventListener('submit', async (e) => {
    const form = e.target;
    if (!form || form.id !== 'commentForm') return;
    e.preventDefault();

    const { content, author, commentHint } = getDomRefs();
    if (!state.postId) { commentHint && (commentHint.textContent='未找到影片 ID'); return; }

    const payload = {
      author: (author?.value || '').trim(),
      content: (content?.value || '').trim()
    };
    if (!payload.content) { commentHint && (commentHint.textContent='内容不能为空'); return; }

    if (commentHint) commentHint.textContent = '提交中…';
    try {
      const r = await fetch(`${API_BASE}/comment/${encodeURIComponent(state.postId)}`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || '提交失败');

      if (commentHint) commentHint.textContent = '提交成功，待审核通过后显示';
      setTimeout(() => { if (commentHint) commentHint.textContent = ''; closeComment(); }, 800);
      if (content) content.value = '';
    } catch (err) {
      console.error(err);
      if (commentHint) commentHint.textContent = err.message || '提交失败';
    }
  });
  function setLikeUI(btn, data){
    if (!btn) return;
    const count = (data && typeof data.count === 'number') ? data.count : 0;
    const liked = !!(data && data.liked);
    btn.querySelector('.like-count').textContent = String(count);
    btn.setAttribute('aria-pressed', liked ? 'true' : 'false');
    btn.classList.toggle('liked', liked);
  }

  // 初始化（拉取当前计数 & 是否已赞）
  window.initLike = async function(input){
    const btn = document.querySelector('#movieModal .like-btn');
    if (!btn) return;

    // 统一 postId：与评论同规则
    const postId = (typeof window.normalizeLikeId === 'function')
      ? window.normalizeLikeId(input)
      : String(input || '');

    btn.dataset.postId = postId;
    btn.disabled = false;     // 打开时可点
    setLikeUI(btn, {count:0, liked:false});  // 先重置

    try{
      const r = await fetch(`${API_BASE}/like/${encodeURIComponent(postId)}`);
      if (!r.ok) throw 0;
      const data = await r.json();
      setLikeUI(btn, data);
    }catch(e){
      // 忽略网络错误，按钮仍可点
    }
  };

  // 点击点赞
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('#movieModal .like-btn');
    if (!btn) return;

    const postId = btn.dataset.postId;
    if (!postId) return;

    // 如果已点赞，就不重复发；你的后端重复 POST 也不会增加计数
    if (btn.getAttribute('aria-pressed') === 'true') return;

    btn.disabled = true;
    try{
      const r = await fetch(`${API_BASE}/like/${encodeURIComponent(postId)}`, { method: 'POST' });
      const data = await r.json();
      setLikeUI(btn, data);
    }catch(e){
      // 可以加个小提示
    }finally{
      btn.disabled = false;
    }
  });
})();

(() => {
  const API_BASE = '/api';

  // —— 工具：规范化 URL 和 slug（与前面一致） ——
  function canonicalUrl(raw){
    try {
      const u = new URL(raw, location.origin);
      u.hash=''; if((u.protocol==='http:'&&u.port==='80')||(u.protocol==='https:'&&u.port==='443')) u.port='';
      u.pathname = u.pathname.replace(/\/{2,}/g,'/').replace(/\/+$/,'');
      const ps=[...u.searchParams.entries()].sort(([a],[b])=>a.localeCompare(b));
      u.search = ps.length ? '?'+ps.map(([k,v])=>`${k}=${v}`).join('&') : '';
      u.hostname = u.hostname.toLowerCase();
      return u.toString();
    } catch { return String(raw||'').trim(); }
  }
  function slug(s){ return String(s||'').toLowerCase().normalize('NFKC').replace(/\s+/g,'-').replace(/-+/g,'-').replace(/^-+|-+$/g,''); }

  // 生成“提名”专用 postId：优先 link，其次 title
  function makeNomPostId({title='', link=''}) {
    if (link) return 'nom:' + canonicalUrl(link);
    if (title) return 'nom:title:' + slug(title);
    return 'nom:unknown';
  }

  const stateNom = { postId: null };

  // 打开/关闭
  function openNomModal(){
    const m = document.getElementById('nomModal');
    if (!m) return;
    m.style.display = 'flex';
    m.setAttribute('aria-hidden','false');
    document.getElementById('nomHint').textContent = '';
    document.getElementById('nomContent').value = '';
    document.getElementById('nomAuthor').focus();
  }
  function closeNomModal(){
    const m = document.getElementById('nomModal');
    if (!m) return;
    m.style.display = 'none';
    m.setAttribute('aria-hidden','true');
  }
  window.closeNomModal = closeNomModal; // 备用

  // 委托：点击任何 “提名” 按钮打开弹窗
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.textcard__btn--nominate');
    if (!btn) return;
    e.preventDefault();
    const title = btn.dataset.title || '';
    const link  = btn.dataset.link  || '';
    stateNom.postId = makeNomPostId({title, link});
    openNomModal();
  });

  // 关闭
  document.getElementById('closeNomModal')?.addEventListener('click', closeNomModal);
  document.getElementById('cancelNomBtn')?.addEventListener('click', closeNomModal);
  document.getElementById('nomModal')?.addEventListener('click', (e) => { if (e.target.id === 'nomModal') closeNomModal(); });
  document.addEventListener('keydown', (e) => {
    const m = document.getElementById('nomModal');
    if (e.key==='Escape' && m?.style.display==='flex') closeNomModal();
  });

  // 提交：复用评论接口 /api/comment/:postId（后台无需改）
  document.getElementById('nomForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const hint = document.getElementById('nomHint');
    if (!stateNom.postId) { hint.textContent = '提名目标缺失'; return; }

    const payload = {
      author: (document.getElementById('nomAuthor')?.value || '').trim(),
      content: (document.getElementById('nomContent')?.value || '').trim()
    };
    if (!payload.content) { hint.textContent = '内容不能为空'; return; }

    hint.textContent = '提交中…';
    try {
      const r = await fetch(`${API_BASE}/comment/${encodeURIComponent(stateNom.postId)}`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || '提交失败');
      hint.textContent = '提交成功，待审核通过后显示';
      setTimeout(() => { hint.textContent = ''; closeNomModal(); }, 900);
    } catch (err) {
      console.error(err);
      hint.textContent = err.message || '提交失败';
    }
  });
})();
// ================== ranktga 提名（独立于 comment） ==================
document.addEventListener('DOMContentLoaded', () => {
  // --- 配置 ---
  const API_BASE = '/api'; 
  const BGM_API_SEARCH = '/api/bgm-search';

  // --- 1. 获取 DOM 元素 ---
  const nomModal = document.getElementById('nomModal');
  const closeBtn = document.getElementById('closeNomModal');
  const cancelBtn = document.getElementById('cancelNomBtn');
  const submitBtn = document.getElementById('submitNomBtn'); 
  const nomHint = document.getElementById('nomHint'); 
  
  const searchInput = document.getElementById('bgmSearchInput');
  const resultsContainer = document.getElementById('searchResults');
  const selectedContainer = document.getElementById('selectedContainer');
  const emptyHint = document.getElementById('emptyHint');
  const authorInput = document.getElementById('nomAuthor');
  const typeRadios = document.querySelectorAll('input[name="nomType"]');

  // 如果找不到关键元素，直接退出，防止报错
  if (!nomModal || !searchInput) {
    console.error("Nomination Modal elements not found!");
    return;
  }

  // --- 2. 状态变量 ---
  let searchTimer;
  let selectedItems = []; 

  const typeMapping = {
    'Animate': 2,
    'Comic': 1,
    'Game': 4,
    'Novel': 1 
  };

  // --- 3. 弹窗控制 ---
  function openNomModal() {
    nomModal.style.display = 'flex'; // JS 控制显示
    nomModal.setAttribute('aria-hidden', 'false');
    // 重置界面
    selectedItems = [];
    renderSelectedItems();
    searchInput.value = '';
    resultsContainer.classList.remove('active');
    resultsContainer.innerHTML = '';
    if (nomHint) nomHint.textContent = '';
    setTimeout(() => searchInput.focus(), 50);
  }

  function closeNomModal() {
    nomModal.style.display = 'none'; // JS 控制隐藏
    nomModal.setAttribute('aria-hidden', 'true');
  }

  // 绑定打开按钮 (根据你的现有代码类名)
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.textcard__btn--nominate');
    if (btn) {
      e.preventDefault();
      openNomModal();
    }
  });

  // 绑定关闭按钮
  closeBtn?.addEventListener('click', closeNomModal);
  cancelBtn?.addEventListener('click', closeNomModal);
  nomModal.addEventListener('click', (e) => { if (e.target === nomModal) closeNomModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nomModal.style.display === 'flex') closeNomModal();
  });

  // --- 4. 搜索核心逻辑 ---

  // 监听分类切换
  typeRadios.forEach(radio => {
    radio.addEventListener('change', () => {
      const query = searchInput.value.trim();
      if (query) performSearch(query);
    });
  });

  // 监听输入 (调试用：打印日志看是否有反应)
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    console.log("Input detected:", query); // 调试日志
    clearTimeout(searchTimer);
    if (query) {
      searchTimer = setTimeout(() => performSearch(query), 500); // 稍微延长到500ms
    } else {
      resultsContainer.classList.remove('active');
      resultsContainer.innerHTML = '';
    }
  });

  async function performSearch(query) {
    const currentUiType = document.querySelector('input[name="nomType"]:checked')?.value || 'Animate';
    const apiType = typeMapping[currentUiType];

    resultsContainer.classList.add('active');
    resultsContainer.style.display = 'block'; // 强制显示
    resultsContainer.innerHTML = '<div style="padding:10px;text-align:center;color:#888;">正在连接 Bangumi...</div>';

    try {
      // 这里的 User-Agent 是必须的，否则 Bangumi 会报错
      const res = await fetch(BGM_API_SEARCH, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'User-Agent': 'NominationApp/1.0 (student_project)' 
        },
        body: JSON.stringify({
          keyword: query,
          filter: { type: [apiType] }
        })
      });

      if (!res.ok) {
        throw new Error(`API Error: ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response:", data); // 调试日志
      renderSearchResults(data.data, currentUiType);

    } catch (err) {
      console.error(err);
      resultsContainer.innerHTML = `<div style="padding:10px;text-align:center;color:#ff6b6b;">搜索失败: ${err.message}</div>`;
    }
  }

  function renderSearchResults(list, uiType) {
    resultsContainer.innerHTML = '';
    if (!list || list.length === 0) {
      resultsContainer.innerHTML = '<div style="padding:10px;text-align:center;color:#888;">未找到结果</div>';
      return;
    }

    list.forEach(item => {
      const div = document.createElement('div');
      div.className = 'result-item';
      const imgUrl = item.image || ''; 
      const imgHtml = imgUrl 
        ? `<img src="${imgUrl}" alt="cover" style="width:40px;height:60px;object-fit:cover;margin-right:10px;">` 
        : `<div style="width:40px;height:60px;background:#333;margin-right:10px;display:inline-block;"></div>`;

      div.innerHTML = `
        <div style="display:flex;align-items:center;width:100%;">
          ${imgHtml}
          <div>
            <div style="font-weight:bold;font-size:14px;">${item.name_cn || item.name}</div>
            <div style="font-size:12px;color:#aaa;">${item.date || '未知'}</div>
          </div>
        </div>
      `;

      div.addEventListener('click', () => {
        addItemToSelection({
          id: item.id,
          name: item.name_cn || item.name,
          type: uiType
        });
      });

      resultsContainer.appendChild(div);
    });
  }

  // --- 5. 选中与提交逻辑 ---
  function addItemToSelection(item) {
    const exists = selectedItems.some(i => i.name === item.name && i.type === item.type);
    if (exists) return;

    selectedItems.push(item);
    renderSelectedItems();
    // 选中后清空搜索框（可选体验）
    // searchInput.value = '';
    // resultsContainer.innerHTML = '';
  }

  function renderSelectedItems() {
    selectedContainer.innerHTML = '';
    if (selectedItems.length === 0) {
      selectedContainer.appendChild(emptyHint);
      return;
    }

    selectedItems.forEach((item, index) => {
      const tag = document.createElement('div');
      tag.className = 'selected-tag';
      tag.innerHTML = `
        <span>[${item.type}] ${item.name}</span>
        <span class="remove-tag" style="margin-left:8px;cursor:pointer;">×</span>
      `;
      tag.querySelector('.remove-tag').addEventListener('click', () => {
        selectedItems.splice(index, 1);
        renderSelectedItems();
      });
      selectedContainer.appendChild(tag);
    });
  }

  submitBtn?.addEventListener('click', async () => {
    if (selectedItems.length === 0) {
      if (nomHint) nomHint.textContent = '请先添加条目';
      return;
    }
    const author = (authorInput?.value || '').trim().slice(0, 40);
    submitBtn.disabled = true;
    submitBtn.textContent = '提交中...';

    const promises = selectedItems.map(async (item) => {
      try {
        await fetch(`${API_BASE}/ranktga`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            author: author,
            content: item.name,
            type: item.type
          })
        });
      } catch (err) {
        console.error(err);
      }
    });

    await Promise.all(promises);
    submitBtn.disabled = false;
    submitBtn.textContent = '提交';
    closeNomModal();
    alert('提交完成');
  });
});