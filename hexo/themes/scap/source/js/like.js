// 根据按钮状态设置 UI
function setLikedUI(btn, liked) {
  btn.classList.toggle('liked', liked);
  btn.disabled = liked;
  btn.setAttribute('aria-pressed', String(liked));
}

// 刷新当前描述区的点赞显示，并更新 data-post-id
async function refreshLikeFor(postId) {
  const box = document.querySelector('.selected-description');
  if (!box) return;
  box.dataset.postId = postId; // 切换到当前视频的ID

  const btn = box.querySelector('.like-btn');
  const countEl = box.querySelector('.like-count');
  if (!btn || !countEl) return;

  try {
    const r = await fetch('/api/like/' + encodeURIComponent(postId));
    const data = await r.json();
    countEl.textContent = data.count ?? 0;
    setLikedUI(btn, !!data.liked);
  } catch (e) {
    console.error('[like] refresh failed', e);
  }
}

// 页面加载：用初始 data-post-id 刷新一次
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.selected-description');
  const initId = box?.dataset?.postId;
  if (initId) refreshLikeFor(initId);

  // 事件委托：点赞
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.like-btn');
    if (!btn) return;
    const root = btn.closest('.selected-description');
    const postId = root?.dataset?.postId;
    if (!postId) return;

    if (!btn.getAttribute('type')) btn.setAttribute('type', 'button');
    if (btn.disabled) return;
    e.preventDefault();

    try {
      const r = await fetch('/api/like/' + encodeURIComponent(postId), { method: 'POST' });
      const data = await r.json();
      const countEl = root.querySelector('.like-count');
      if (countEl) countEl.textContent = data.count ?? 0;
      setLikedUI(btn, !!data.liked);
    } catch (e2) {
      console.error('[like] like failed', e2);
    }
  });
});

document.querySelector('.share-btn').addEventListener('click', () => {
  const text = encodeURIComponent('快来看这个视频！');
  const url = encodeURIComponent(window.location.href);
  window.open(`https://x.com/intent/tweet?text=${text}&url=${url}`, '_blank');
});


// 暴露给其他脚本调用
window.refreshLikeFor = refreshLikeFor;
