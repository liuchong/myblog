# 黑貓博客

SAOS 的 `site` 分支，只存放文章、网站配置和静态资源。

- 文章：`content/blog`
- 配置：`saos.config.mjs`
- 静态资源：`static`
- 生成器源码：`master` 分支

向本分支推送 Markdown 或 MDX 后，GitHub Actions 会调用 `master` 分支上的
SAOS 源码生成并发布网站。
