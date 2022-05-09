---
title: 用 gatsby 和 github workflow 写博客
date: "2020-12-17"
description: "用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布"
---

这里是本[博客](/)的[仓库](https://github.com/liuchong/myblog)。

之前用的也是 [gatsby](https://www.gatsbyjs.com/)，自己改出来了一个 [gatsby-starter-blog-typescript](https://github.com/liuchong/gatsby-starter-blog-typescript)，但已经年久失修不想维护了。
于是直接把博客的清空了仓库，更新到最新的官方模板 [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)。

### 安装 gatsby

详细过程可以参考官方文档 <https://www.gatsbyjs.com/tutorial/>，我这里有完整的环境，只需要运行命令：

```
npm install -g gatsby-cli
gatsby new myblog https://github.com/gatsbyjs/gatsby-starter-blog
```

运行完了，把一些文件里面按照需要改一下就可以使用了：

```
content/assets/
src/components/bio.js
gatsby-config.js
```

预览一下：

```
gatsby develop
```

执行完命令打开 <http://localhost:8000/> 可以看到几个示范文章已经在那里了。

我还在 `static` 目录放置了一些文件，它们会被原封不动的复制到网站目录。
比如 `CNAME` 用来在 github pages 绑定域名，后面会发布后就可以用到。

安装完后，可以创建一个 github 仓库，我这里就是 `myblog`，把代码提交后推到仓库里。

### 写文章

我们看到，在 `content/blog/` 有一些目录，里面分别有一个 index.md，这就是文章了。比如我们参观一下这个 `hello-world`：

```
---
title: Hello World
date: "2015-05-01T22:12:03.284Z"
description: "Hello World"
---

This is my first post on my new fake blog! How exciting!
... 此处省略很多字
```

现在这些展示文章的任务就圆满完成了，我们愿意的话可以把它们删除。然后比着它们的格式，打开咱喜欢的编辑器，写起来吧！

安装一个工具 `gh-pages` 尝试发布一下，进行观赏：

```
npm install --save gh-pages
npx gh-pages -b public -d public -r https://github.com/liuchong/myblog.git
```

上面命令用 gh-pages 工具把 public 目录发到了 public 分支，更详细可参考 <https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/>。
在项目设置里面设置 github pages 分支，点击显示出来的那个链接博客就出来了。

到目前为止，还不错是吧！

### 设置 workflow

你看，写完有一步发布过程，挺麻烦的；而且什么时候没有环境或者甚至只有一个浏览器，那就发布不了了。

幸亏有 github actions，用上它就方便多了。

我直接把 workflow 配置文件 `.github/workflows/publish.yml` 贴到这里，假设源码提交到了 `master` 分支：

```
name: Publish

on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: Publish
        run: |
          git config user.email ${{github.actor}}@users.noreply.github.com
          git config user.name ${{github.actor}}
          npm install
          npx gatsby build
          npx gh-pages -b public -d public -r https://${{ secrets.PUBLISH }}@github.com/${{ github.repository }}
```

要注意的是 `secrets.PUBLISH` 这个要手动在 <https://github.com/settings/tokens> 创建 token，
然后再到项目里面，比如我就是在 <https://github.com/liuchong/myblog/settings/secrets/actions>，添加一个 secrets 项，
`Name`那项就填的 `PUBLISH`。

说明一下，这个链接 <https://docs.github.com/cn/free-pro-team@latest/actions/reference/authentication-in-a-workflow> 上面还有个 `secrets.GITHUB_TOKEN`，
说是自动创建的，不过我没有使用成功。

如果发布有问题，可以试着手动执行一下命令测试，注意 `***` 改成自己的 secret：

```
gh-pages -b public -d public -r https://***@github.com/liuchong/myblog.git
```

### 从网页发布

到仓库页面 <https://github.com/liuchong/myblog/tree/master/content/blog> 点击 **Add file -> Create new file** 然后填入 `my-title/index.md`，写就行了。

我这篇博客就是在网页上面写的，其中 `date` 条目我手工写的，所以简化了一下，像 `date: "2020-12-17"` 这样也是可以的，不用那么精确。

不太推荐直接在网页上面写，我写完后点击了一下 preview，又点回编辑界面时失败了一下，还以为文章没了，有点吓人 👀
