---
title: 用 github.dev 写博客
date: "2021-08-26"
description: "用 github.dev 配合 github actions 写博客，支持在在线编辑，自动发布"
---

上回说到可以 [用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布](https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md)，最近出了个 github.dev，这么一来写博客就更方便了。

### 上回文章在这里看

https://blakat.cc/write-and-publish-blog-with-gatsby-and-github-workflow/

https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md

### 这次使用 github.dev 写

之前 [从网页发布](https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md#%E4%BB%8E%E7%BD%91%E9%A1%B5%E5%8F%91%E5%B8%83) 一节提到：
> 到仓库页面 <https://github.com/liuchong/myblog/tree/master/content/blog> 点击 **Add file -> Create new file** 然后填入 `my-title/index.md`，写就行了。

现在可以直接访问 https://github.dev/liuchong/myblog 然后在 content/blog 下面新建一个目录比如 [write-blog-with-github-dev](https://github.com/liuchong/myblog/tree/master/content/blog/write-blog-with-github-dev)，再创建一个 index.md，开始写就好了。跟普通编辑器一样，可以打开多个文件，可以预览 markdown。在浏览器里写东西总感觉不放心，好像一不小心就会丢了似的，实际上不用担心：打开的文件标签可以关闭重新打开，浏览器标签可以关闭甚至浏览器也可以整个关闭然后重新打开，文章是不会丢失的。

写完切换到源代码管理标签，提交就行了，之前我们有设置好的发布工作流，运行完就可以看到文章了。

比如这篇就是这样写的，也不是特别有用不过还行，特定场景下还是会有些作用的罢。