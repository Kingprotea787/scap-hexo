(() => {
  const els = {
    tabs: document.getElementById('tabs'),
    postList: document.getElementById('postList'),
    btnMore: document.getElementById('btnMore'),
    btnNew: document.getElementById('btnNew'),
    dlgNew: document.getElementById('dlgNew'),
    newAuthor: document.getElementById('newAuthor'),
    newTitle: document.getElementById('newTitle'),
    newContent: document.getElementById('newContent'),
    btnSubmitPost: document.getElementById('btnSubmitPost'),
    btnAdmin: document.getElementById('btnAdmin'),
    // detail
    detail: document.getElementById('detail'),
    btnCloseDetail: document.getElementById('btnCloseDetail'),
    btnLikeDetail: document.getElementById('btnLikeDetail'),
    detailLikeCount: document.getElementById('detailLikeCount'),
    detailTitle: document.getElementById('detailTitle'),
    detailMeta: document.getElementById('detailMeta'),
    detailContent: document.getElementById('detailContent'),
    comments: document.getElementById('comments'),
    btnMoreComments: document.getElementById('btnMoreComments'),
    formComment: document.getElementById('formComment'),
    toast: document.getElementById('toast'),
  };

  // ---------------- API 适配 ----------------
  const api = {
    base: '', // 同域：留空；若反代到 /like-api，可设 '/like-api'

    // 新增：支持 parent 查询子帖（评论）
    async fetchPosts({ sort='new', limit=20, before=Number.MAX_SAFE_INTEGER, parent=null }) {
      const u = new URL(`${this.base}/api/post`, location.origin);
      u.searchParams.set('sort', sort);
      u.searchParams.set('limit', String(limit));
      if (before && before !== Number.MAX_SAFE_INTEGER) u.searchParams.set('before', String(before));
      if (parent) u.searchParams.set('parent', String(parent));
      const r = await fetch(u, { credentials: 'same-origin' });
      if (!r.ok) throw new Error(`加载帖子失败 ${r.status}`);
      return r.json(); // {posts:[{id,title,content,author,createdAt}], nextBefore}
    },

    // 新增：支持 parentId 作为子帖发布
    async createPost({ author, title, content, parentId=null }) {
      const r = await fetch(`${this.base}/api/post`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author, title, content, parentId }),
      });
      if (!r.ok) {
        const t = await r.text().catch(()=> '');
        throw new Error(t || `发帖失败 ${r.status}`);
      }
      return r.json();
    },

    async getLike(postId) {
      const r = await fetch(`${this.base}/api/like/${encodeURIComponent(postId)}`);
      if (!r.ok) throw new Error(`获取点赞失败 ${r.status}`);
      return r.json(); // { postId, count, liked }
    },
    async doLike(postId) {
      const r = await fetch(`${this.base}/api/like/${encodeURIComponent(postId)}`, { method: 'POST' });
      if (!r.ok) throw new Error(`点赞失败 ${r.status}`);
      return r.json(); // { postId, count, liked }
    },
  };

  // ---------------- 状态 ----------------
  const state = {
    sort: 'new',
    posts: [],
    nextBefore: null,
    loading: false,
    // detail
    currentPost: null, // {id,title,content,author,createdAt}
    cmtNextBefore: null,
    cmtLoading: false,
    admin: {
      enabled: false,
      token: localStorage.getItem('adminToken') || ''
    }
  };

  // ---------------- 工具 ----------------
  function fmtDate(s){
    // s: "YYYY-MM-DD HH:mm:ss" or ISO
    const d = new Date(String(s || '').replace(' ', 'T') + 'Z'); // sqlite 默认 UTC
    if (isNaN(d)) return s || '';
    return d.toLocaleString();
  }
  function toast(msg, ms=1600){
    const t = els.toast;
    t.textContent = msg;
    t.style.display = 'block';
    clearTimeout(t._h); t._h = setTimeout(()=> t.style.display='none', ms);
  }
  function truncate(s, n){
    if (!s) return '';
    return s.length > n ? s.slice(0,n-1) + '…' : s;
  }
  function escapeHtml(s){
    return String(s ?? '').replace(/[&<>"']/g, (m)=>({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
    }[m]));
  }

  async function likeOnList(card, postId){
    try {
      const { count } = await api.doLike(postId);
      const span = card.querySelector('.js-like-count');
      if (span) span.textContent = String(count);
      toast('已点赞');
    } catch(e){ toast(e.message || '点赞失败'); }
  }

  // ---------------- 详情抽屉 ----------------
  async function openDetail(postId){
    // 找帖子
    const p = state.posts.find(x => String(x.id) === String(postId));
    if (!p) return;
    state.currentPost = p;
    state.cmtNextBefore = null;
    els.detailTitle.textContent = p.title || '(无标题)';
    els.detailMeta.textContent = `${p.author || '匿名'} · ${fmtDate(p.createdAt || p.created_at || '')}`;
    els.detailContent.textContent = p.content || '';
    els.comments.innerHTML = '';
    els.detail.classList.add('active');

    // 点赞状态
    try {
      const { count } = await api.getLike(p.id);
      els.detailLikeCount.textContent = String(count);
    } catch {}

    // 首屏“评论”= 子帖
    await loadMoreComments();
  }

  // ---------------- 事件绑定：详情 ----------------
  els.btnCloseDetail.addEventListener('click', () => { els.detail.classList.remove('active'); });
  els.btnLikeDetail.addEventListener('click', async () => {
    if (!state.currentPost) return;
    try {
      const { count } = await api.doLike(state.currentPost.id);
      els.detailLikeCount.textContent = String(count);
    } catch(e){ toast(e.message || '点赞失败'); }
  });
  els.btnMoreComments.addEventListener('click', loadMoreComments);

  // 发表评论 = 发表“子帖（无标题）”
  els.formComment.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    if (!state.currentPost) return;
    const fd = new FormData(els.formComment);
    const author = (fd.get('author') || '').toString().trim();
    const content = (fd.get('content') || '').toString().trim();
    if (!content) return toast('内容不能为空');
    try {
      await api.createPost({ author, title: '', content, parentId: state.currentPost.id });
      els.formComment.reset();
      toast('已发布');
      // 前端立即插入
      const item = document.createElement('div');
      item.className = 'cmt';
      const now = new Date().toLocaleString();
      item.innerHTML = `
        <div class="meta">${escapeHtml(author || '匿名')} · ${escapeHtml(now)}</div>
        <div class="text">${escapeHtml(content)}</div>
      `;
      els.comments.insertBefore(item, els.comments.firstChild);
    } catch(e){ toast(e.message || '发表评论失败'); }
  });

  // ---------------- 顶部 Tabs / 加载更多 ----------------
  els.tabs.addEventListener('click', async (ev) => {
    const tab = ev.target.closest('.tab');
    if (!tab) return;
    const sort = tab.dataset.sort;
    if (sort === state.sort) return;

    // 切换 active
    els.tabs.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    state.sort = sort;
    await reloadPosts();
  });

  els.btnMore.addEventListener('click', async () => {
    if (state.loading || !state.nextBefore) return;
    await appendPosts();
  });

  // ---------------- 发帖 ----------------
  els.btnNew.addEventListener('click', () => {
    if (typeof els.dlgNew.showModal === 'function') els.dlgNew.showModal();
    else els.dlgNew.setAttribute('open','');
  });

  els.btnSubmitPost.addEventListener('click', async () => {
    const author = els.newAuthor.value.trim();
    const title = els.newTitle.value.trim();
    const content = els.newContent.value.trim();
    if (!content) return toast('正文不能为空');

    try {
      await api.createPost({ author, title, content, parentId: null });
      toast('发布成功');
      els.newAuthor.value = ''; els.newTitle.value=''; els.newContent.value='';
      els.dlgNew.close?.();
      await reloadPosts(); // 回到最新
    } catch(e){ toast(e.message || '发帖失败'); }
  });

  // ---------------- 列表数据流 ----------------
  async function reloadPosts(){
    state.loading = true;
    els.postList.innerHTML = '';
    els.btnMore.disabled = true;
    try {
      const { posts, nextBefore } = await api.fetchPosts({ sort: state.sort, limit: 20, parent: null });
      state.posts = posts || [];
      state.nextBefore = nextBefore || null;
      renderPosts();
      els.btnMore.disabled = !state.nextBefore;
      els.btnMore.textContent = state.nextBefore ? '加载更多' : '没有更多了';
    } catch(e){ toast(e.message || '加载失败'); }
    finally { state.loading = false; }
  }

  async function appendPosts(){
    state.loading = true;
    els.btnMore.disabled = true;
    try {
      const { posts, nextBefore } = await api.fetchPosts({
        sort: state.sort, limit: 20, before: state.nextBefore || Number.MAX_SAFE_INTEGER, parent: null
      });
      state.posts.push(...(posts||[]));
      state.nextBefore = nextBefore || null;
      renderPosts();
      els.btnMore.disabled = !state.nextBefore;
      els.btnMore.textContent = state.nextBefore ? '加载更多' : '没有更多了';
    } catch(e){ toast(e.message || '加载失败'); }
    finally { state.loading = false; }
  }

  els.btnAdmin.addEventListener('click', async () => {
    if (!state.admin.enabled) {
      const t = prompt('请输入管理员令牌（留空取消）：', state.admin.token || '');
      if (!t) return;
      state.admin.token = t.trim();
      localStorage.setItem('adminToken', state.admin.token);
      state.admin.enabled = true;
      toast('已进入管理模式');
    } else {
      if (confirm('退出管理模式并清除本地令牌？')) {
        state.admin.enabled = false;
        state.admin.token = '';
        localStorage.removeItem('adminToken');
        toast('已退出管理模式');
      }
    }
    renderPosts();        // 让按钮显隐生效
    renderCommentsAgain();// 若详情已打开，让评论的删除按钮也生效
  });

  function renderCommentsAgain() {
    if (!state.currentPost) return;
    const items = [...els.comments.querySelectorAll('.cmt')];
    items.forEach(el => {
      const id = el.dataset.id;
      if (!id) return;
      let btn = el.querySelector('.js-del-cmt');
      if (state.admin.enabled) {
        if (!btn) {
          btn = document.createElement('button');
          btn.className = 'btn btn-danger js-del-cmt';
          btn.style.marginLeft = '8px';
          btn.textContent = '删除';
          btn.addEventListener('click', () => deleteComment(id));
          const meta = el.querySelector('.meta');
          meta && meta.appendChild(btn);
        }
      } else {
        btn?.remove();
      }
    });
  }

  function renderPosts() {
    els.postList.innerHTML = state.posts.map(p => {
      const author = p.author || '匿名';
      const date = fmtDate(p.createdAt || p.created_at || '');
      const excerpt = truncate(p.content || '', 180);
      const adminBtn = state.admin.enabled
        ? `<button type="button" class="btn btn-danger js-del-post" data-id="${p.id}">删除</button>`
        : '';
      return `
        <article class="card" data-id="${p.id}">
          <h3 class="title">${escapeHtml(p.title || '(无标题)')}</h3>
          <div class="meta">${escapeHtml(author)} · ${escapeHtml(date)}</div>
          <div class="excerpt">${escapeHtml(excerpt)}</div>
          <div class="toolbar">
            <span class="pill" data-hot="1">新帖</span>
            <span class="pill js-like" data-id="${p.id}" title="点赞">👍 <span class="js-like-count">--</span></span>
            <button type="button" class="btn btn-accent js-open">评论</button>
            ${adminBtn}
          </div>

          <!-- 评论预览区（子帖预览） -->
          <div class="comments-preview" data-for="${p.id}">
            <div class="cmt-list"></div>
            <div class="cmt-footer">
              <button type="button" class="btn btn-small js-open">查看全部评论</button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // 逐卡片的点赞/删除/评论预览加载
    els.postList.querySelectorAll('article.card').forEach(card => {
      const id = card.dataset.id;

      const likeBtn = card.querySelector('.js-like');
      likeBtn?.addEventListener('click', async () => {
        try {
          const { count } = await api.doLike(id);
          const span = card.querySelector('.js-like-count');
          if (span) span.textContent = String(count);
          toast('已点赞');
        } catch(e){ toast(e.message || '点赞失败'); }
      });

      const delBtn = card.querySelector('.js-del-post');
      if (delBtn) delBtn.addEventListener('click', () => deletePost(id));

      // 异步拉点赞数
      api.getLike(id).then(({count})=>{
        const span = card.querySelector('.js-like-count');
        if (span) span.textContent = String(count);
      }).catch(()=>{});

      // 懒加载“评论预览”（子帖）
      observeAndLoadCommentsPreview(card, id);
    });
  }

  // 简单的内存缓存，避免重复请求
  const commentsCache = new Map(); // key: postId, value: { loaded: true, comments: [...] }

  function observeAndLoadCommentsPreview(cardEl, postId) {
    const container = cardEl.querySelector('.comments-preview');
    if (!container) return;

    // 已有缓存就直接渲染
    if (commentsCache.get(postId)?.loaded) {
      renderCommentsPreview(container, commentsCache.get(postId).comments);
      return;
    }

    // 使用 IntersectionObserver 进入视口再拉
    const io = new IntersectionObserver((entries) => {
      entries.forEach(async entry => {
        if (!entry.isIntersecting) return;
        io.unobserve(entry.target);
        try {
          // 用子帖充当最新评论预览
          const { posts } = await api.fetchPosts({ sort:'new', limit: 3, parent: postId });
          const comments = posts || [];
          commentsCache.set(postId, { loaded: true, comments });
          renderCommentsPreview(container, comments);
        } catch(e) {
          container.querySelector('.cmt-list')?.insertAdjacentHTML(
            'beforeend',
            `<div class="cmt cmt-empty muted">加载评论失败</div>`
          );
        }
      });
    }, { rootMargin: '120px 0px' });

    io.observe(container);
  }

  function renderCommentsPreview(container, comments) {
    const listEl = container.querySelector('.cmt-list');
    if (!listEl) return;
    listEl.innerHTML = '';

    if (!comments || comments.length === 0) {
      listEl.innerHTML = `<div class="cmt cmt-empty muted">还没有评论，来说第一句吧～</div>`;
      return;
    }

    const html = comments.map(c => `
      <div class="cmt">
        <div class="meta">${escapeHtml(c.author || '匿名')} · ${escapeHtml(fmtDate(c.createdAt || c.created_at || ''))}</div>
        <div class="text">${escapeHtml(c.content || '')}</div>
      </div>
    `).join('');
    listEl.innerHTML = html;
  }

  // 加载更多“评论”（子帖）
  async function loadMoreComments(){
    if (!state.currentPost || state.cmtLoading) return;
    state.cmtLoading = true;
    try {
      const resp = await api.fetchPosts({
        sort: 'new',
        limit: 20,
        before: state.cmtNextBefore || Number.MAX_SAFE_INTEGER,
        parent: state.currentPost.id
      });

      const list = Array.isArray(resp?.posts) ? resp.posts : [];
      state.cmtNextBefore = resp && typeof resp.nextBefore !== 'undefined'
        ? resp.nextBefore
        : null;

      for (const c of list) {
        const item = document.createElement('div');
        item.className = 'cmt';
        item.dataset.id = c.id;
        const metaHtml = `
          <div class="meta">
            ${escapeHtml(c.author || '匿名')} · ${escapeHtml(fmtDate(c.createdAt || c.created_at || ''))}
            ${state.admin.enabled ? '<button class="btn btn-danger js-del-cmt" style="margin-left:8px">删除</button>' : ''}
          </div>`;
        item.innerHTML = metaHtml + `<div class="text">${escapeHtml(c.content || '')}</div>`;
        els.comments.appendChild(item);

        // 绑定删除按钮
        if (state.admin.enabled) {
          const btn = item.querySelector('.js-del-cmt');
          if (btn) btn.addEventListener('click', () => deleteComment(c.id));
        }
      }

      els.btnMoreComments.disabled = !state.cmtNextBefore;
      els.btnMoreComments.textContent = state.cmtNextBefore ? '更多评论' : '没有更多了';
    } catch (e) {
      toast(e.message || '加载评论失败');
    } finally {
      state.cmtLoading = false;
    }
  }

  async function deletePost(id) {
    if (!state.admin.token) return toast('未设置管理员令牌');
    if (!confirm('确定删除该帖子？其下评论与点赞会一并清除。')) return;
    try {
      const r = await fetch('/api/post-admin/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': state.admin.token
        },
        body: JSON.stringify({ ids: [String(id)] })
      });
      const data = await r.json().catch(()=> ({}));
      if (!r.ok) throw new Error(data.error || `删除失败 ${r.status}`);
      toast('帖子已删除');
      // 从本地状态移除并重渲染
      state.posts = state.posts.filter(p => String(p.id) !== String(id));
      renderPosts();
      // 若详情页打开的是这个帖子，也关闭
      if (state.currentPost && String(state.currentPost.id) === String(id)) {
        els.detail.classList.remove('active');
        state.currentPost = null;
      }
    } catch (e) {
      toast(e.message || '删除失败');
    }
  }

  // 删除“评论”= 删除子帖
  async function deleteComment(id) {
    if (!state.admin.token) return toast('未设置管理员令牌');
    if (!confirm('确定删除该评论？')) return;
    try {
      const r = await fetch('/api/post-admin/delete', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-token': state.admin.token
        },
        body: JSON.stringify({ ids: [String(id)] })
      });
      const data = await r.json().catch(()=> ({}));
      if (!r.ok) throw new Error(data.error || `删除失败 ${r.status}`);
      toast('评论已删除');
      // 从 DOM 移除该评论
      const node = els.comments.querySelector(`.cmt[data-id="${id}"]`);
      node?.remove();
    } catch (e) {
      toast(e.message || '删除失败');
    }
  }

  // 列表点击委托：仅负责“查看”按钮
  els.postList.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.js-open');
    if (!btn) return;
    ev.preventDefault();
    const card = btn.closest('article.card');
    const id = card?.dataset.id;
    if (id) openDetail(id);
  });
  window.openDetail = openDetail;

  // ---------------- 启动 ----------------
  // 默认加载“最新”
  reloadPosts();
})();
