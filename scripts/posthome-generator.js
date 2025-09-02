const pagination = require('hexo-pagination');

hexo.extend.generator.register('posthome', function (locals) {
  const config = this.config;
  const perPage = 6;  // 固定每页6篇，匹配Top Stories的显示数量
  const allPosts = locals.posts.sort('-date');  // 所有帖子，按日期降序
  const paginatedPosts = allPosts.slice(3);  // 跳过前3篇（用于英雄区），剩余帖子用于分页

  return pagination('posthome', paginatedPosts, {
    perPage: perPage,
    layout: ['posthome'],
    data: {}
  });
});