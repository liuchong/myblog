var e={site:{title:`黑貓博客`,author:{name:`刘冲`,summary:`写代码，也写一点关于代码和生活的东西。`},description:`刘冲的个人博客。`,siteUrl:`https://blakat.cc/`,social:{weibo:`liuchong`,github:`liuchong`}},posts:[{slug:`/nginx-router-example/`,title:`nginx router example`,date:`March 06, 2017`,dateISO:`2017-03-06T01:33:15.000Z`,description:`created an example repository of simple dynamic routing application to show the usage of openresty.`,excerpt:`created an example repository of simple dynamic routing application to show the usage of openresty.`,html:`<p>Created an example repository of simple dynamic routing application to show the usage of openresty on github:
<a href="https://github.com/liuchong/ngx-router-example">ngx-router-example</a></p>`,previousSlug:null,nextSlug:`/ngrok-tunnels-example/`},{slug:`/ngrok-tunnels-example/`,title:`ngrok tunnels example`,date:`July 10, 2018`,dateISO:`2018-07-10T13:16:55.000Z`,description:`created an example repository of simple ngrok tunnels.`,excerpt:`created an example repository of simple ngrok tunnels.`,html:`<p>Created an example repository of simple ngrok tunnels on github:
<a href="https://github.com/liuchong/ngrok-tunnels-example">ngrok-tunnels-example</a></p>
<p>Note:<br>
Maybe <a href="https://github.com/fatedier/frp">frp</a> is a better choice.</p>`,previousSlug:`/nginx-router-example/`,nextSlug:`/write-a-third-party-cargo-subcommand/`},{slug:`/write-a-third-party-cargo-subcommand/`,title:`写一个第三方 cargo 子命令`,date:`December 18, 2018`,dateISO:`2018-12-18T13:26:11.000Z`,description:`写一个 cargo 子命令，把 shell 命令存到配置文件里面`,excerpt:`写一个 cargo 子命令，把 shell 命令存到配置文件里面`,html:`<p>写项目的时候，有时候会写一些较长的 shell 命令，反复输入不方便，也容易丢失，就想着把它放到配置文件里。</p>
<p>阅读了 cargo 官方 <a href="https://github.com/rust-lang/cargo/wiki/Third-party-cargo-subcommands">wiki</a></p>
<p>阅读了 cargo 官方 <a href="https://doc.rust-lang.org/cargo/reference/external-tools.html">reference</a></p>
<p>观察目录 ~/.cargo/bin/ 下面的文件，发现一些比如 racer、rls、rustfmt 等命令，是可以直接运行的，还有一些 cargo- 开头的命令，比如 cargo-clippy、cargo-fmt，就是运行 cargo clippy、cargo fmt 等命令时执行的程序。</p>
<p>试一下，</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">cd ~/.cargo/bin/
</span><span class="code-line">ln -s racer cargo-racer
</span><span class="code-line">cargo racer
</span></code></pre></div>
<p>输出比较不是很正常，看上去是把字符串“racer”当做参数传给了命令 racer，不过也对刚才的调查做了简单证实。</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">error: Found argument 'racer' which wasn't expected, or isn't valid in this context
</span><span class="code-line">
</span><span class="code-line">USAGE:
</span><span class="code-line">...
</span></code></pre></div>
<h4>编码</h4>
<ol>
<li>创建项目 cargo new cargo-x</li>
<li>写代码</li>
<li>发布项目 cargo publish</li>
</ol>
<h4>仓库</h4>
<p>写了一个非常简单的版本，代码在
<a href="https://github.com/liuchong/cargo-x" target="_blank"><img src="/images/bomb.png" alt="@liuchong/cargo-x" width="32" height="32" align="bottom"></a></p>`,previousSlug:`/ngrok-tunnels-example/`,nextSlug:`/rewrite-blockchain-tutorial-in-rust/`},{slug:`/rewrite-blockchain-tutorial-in-rust/`,title:`rewrite blockchain tutorial in rust`,date:`March 06, 2019`,dateISO:`2019-03-06T04:44:30.000Z`,description:`简单重写了个 Rust 版的 blockchain-tuorial，代码不是太严谨`,excerpt:`简单重写了个 Rust 版的 blockchain-tuorial，代码不是太严谨`,html:`<h1>简单重写了个 Rust 版的 blockchain-tuorial</h1>
<p>看了篇文章</p>
<blockquote>
<p><a href="https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc">https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc</a></p>
</blockquote>
<blockquote>
<p><a href="https://github.com/mycoralhealth/blockchain-tutorial">https://github.com/mycoralhealth/blockchain-tutorial</a></p>
</blockquote>
<p>想着没几行代码，就用 Rust 简单写了下，写得不是多严谨。</p>
<p>我的代码在
<a href="https://github.com/liuchong/blockchain-tutorial" target="_blank"><img src="/images/bomb.png" alt="@liuchong/blockchain-tutorial" width="32" height="32" align="bottom"></a></p>`,previousSlug:`/write-a-third-party-cargo-subcommand/`,nextSlug:`/simple-snowflake-in-go-and-rust/`},{slug:`/simple-snowflake-in-go-and-rust/`,title:`simple snowflake in go and rust`,date:`March 17, 2019`,dateISO:`2019-03-16T17:39:21.000Z`,description:`https://github.com/liuchong/sf & https://github.com/liuchong/fid`,excerpt:`https://github.com/liuchong/sf &amp; https://github.com/liuchong/fid`,html:`<p><a href="https://github.com/liuchong/sf">https://github.com/liuchong/sf</a></p>
<p><a href="https://github.com/liuchong/fid">https://github.com/liuchong/fid</a></p>`,previousSlug:`/rewrite-blockchain-tutorial-in-rust/`,nextSlug:`/write-and-publish-blog-with-gatsby-and-github-workflow/`},{slug:`/write-and-publish-blog-with-gatsby-and-github-workflow/`,title:`用 gatsby 和 github workflow 写博客`,date:`December 17, 2020`,dateISO:`2020-12-17T00:00:00.000Z`,description:`用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布`,excerpt:`用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布`,html:`<p>这里是本<a href="/">博客</a>的<a href="https://github.com/liuchong/myblog">仓库</a>。</p>
<p>之前用的也是 <a href="https://www.gatsbyjs.com/">gatsby</a>，自己改出来了一个 <a href="https://github.com/liuchong/gatsby-starter-blog-typescript">gatsby-starter-blog-typescript</a>，但已经年久失修不想维护了。
于是直接把博客的清空了仓库，更新到最新的官方模板 <a href="https://github.com/gatsbyjs/gatsby-starter-blog">gatsby-starter-blog</a>。</p>
<h3>安装 gatsby</h3>
<p>详细过程可以参考官方文档 <a href="https://www.gatsbyjs.com/tutorial/">https://www.gatsbyjs.com/tutorial/</a>，我这里有完整的环境，只需要运行命令：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">npm install -g gatsby-cli
</span><span class="code-line">npx gatsby new myblog https://github.com/gatsbyjs/gatsby-starter-blog
</span></code></pre></div>
<p>运行完了，把一些文件里面按照需要改一下就可以使用了：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">content/assets/
</span><span class="code-line">src/components/bio.js
</span><span class="code-line">gatsby-config.js
</span></code></pre></div>
<p>预览一下：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">npx gatsby develop
</span></code></pre></div>
<p>执行完命令打开 <a href="http://localhost:8000/">http://localhost:8000/</a> 可以看到几个示范文章已经在那里了。</p>
<p>我还在 <code>static</code> 目录放置了一些文件，它们会被原封不动的复制到网站目录。
比如 <code>CNAME</code> 用来在 github pages 绑定域名，后面会发布后就可以用到。</p>
<p>安装完后，可以创建一个 github 仓库，我这里就是 <code>myblog</code>，把代码提交后推到仓库里。</p>
<h3>写文章</h3>
<p>我们看到，在 <code>content/blog/</code> 有一些目录，里面分别有一个 index.md，这就是文章了。比如我们参观一下这个 <code>hello-world</code>：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">---
</span><span class="code-line">title: Hello World
</span><span class="code-line">date: "2015-05-01T22:12:03.284Z"
</span><span class="code-line">description: "Hello World"
</span><span class="code-line">---
</span><span class="code-line">
</span><span class="code-line">This is my first post on my new fake blog! How exciting!
</span><span class="code-line">... 此处省略很多字
</span></code></pre></div>
<p>现在这些展示文章的任务就圆满完成了，我们愿意的话可以把它们删除。然后比着它们的格式，打开咱喜欢的编辑器，写起来吧！</p>
<p>安装一个工具 <code>gh-pages</code> 尝试发布一下，进行观赏：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">npm install --save-dev gh-pages
</span><span class="code-line">npx gh-pages -b public -d public -r https://github.com/liuchong/myblog.git
</span></code></pre></div>
<p>上面命令用 gh-pages 工具把 public 目录发到了 public 分支，更详细可参考 <a href="https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/">https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/</a>。
在项目设置里面设置 github pages 分支，点击显示出来的那个链接博客就出来了。</p>
<p>到目前为止，还不错是吧！</p>
<h3>设置 workflow</h3>
<p>你看，写完有一步发布过程，挺麻烦的；而且什么时候没有环境或者甚至只有一个浏览器，那就发布不了了。</p>
<p>幸亏有 github actions，用上它就方便多了。</p>
<p>我直接把 workflow 配置文件 <code>.github/workflows/publish.yml</code> 贴到这里，假设源码提交到了 <code>master</code> 分支：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">name: Publish
</span><span class="code-line">
</span><span class="code-line">on:
</span><span class="code-line">  push:
</span><span class="code-line">    branches:
</span><span class="code-line">      - master
</span><span class="code-line">
</span><span class="code-line">jobs:
</span><span class="code-line">  build:
</span><span class="code-line">    runs-on: ubuntu-latest
</span><span class="code-line">    steps:
</span><span class="code-line">      - uses: actions/checkout@v1
</span><span class="code-line">      - name: Publish
</span><span class="code-line">        run: |
</span><span class="code-line">          git config user.email \${{github.actor}}@users.noreply.github.com
</span><span class="code-line">          git config user.name \${{github.actor}}
</span><span class="code-line">          npm install
</span><span class="code-line">          npx gatsby build
</span><span class="code-line">          npx gh-pages -b public -d public -r https://\${{ secrets.PUBLISH }}@github.com/\${{ github.repository }}
</span></code></pre></div>
<p>要注意的是 <code>secrets.PUBLISH</code> 这个要手动在 <a href="https://github.com/settings/tokens">https://github.com/settings/tokens</a> 创建 token，
然后再到项目里面，比如我就是在 <a href="https://github.com/liuchong/myblog/settings/secrets/actions">https://github.com/liuchong/myblog/settings/secrets/actions</a>，添加一个 secrets 项，
<code>Name</code>那项就填的 <code>PUBLISH</code>。</p>
<p>说明一下，这个链接 <a href="https://docs.github.com/cn/free-pro-team@latest/actions/reference/authentication-in-a-workflow">https://docs.github.com/cn/free-pro-team@latest/actions/reference/authentication-in-a-workflow</a> 上面还有个 <code>secrets.GITHUB_TOKEN</code>，
说是自动创建的，不过我没有使用成功。</p>
<p>如果发布有问题，可以试着手动执行一下命令测试，注意 <code>***</code> 改成自己的 secret：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">gh-pages -b public -d public -r https://***@github.com/liuchong/myblog.git
</span></code></pre></div>
<h3>从网页发布</h3>
<p>到仓库页面 <a href="https://github.com/liuchong/myblog/tree/master/content/blog">https://github.com/liuchong/myblog/tree/master/content/blog</a> 点击 <strong>Add file -> Create new file</strong> 然后填入 <code>my-title/index.md</code>，写就行了。</p>
<p>我这篇博客就是在网页上面写的，其中 <code>date</code> 条目我手工写的，所以简化了一下，像 <code>date: "2020-12-17"</code> 这样也是可以的，不用那么精确。</p>
<p>不太推荐直接在网页上面写，我写完后点击了一下 preview，又点回编辑界面时失败了一下，还以为文章没了，有点吓人 👀</p>`,previousSlug:`/simple-snowflake-in-go-and-rust/`,nextSlug:`/write-blog-with-github-dev/`},{slug:`/write-blog-with-github-dev/`,title:`用 github.dev 写博客`,date:`August 26, 2021`,dateISO:`2021-08-26T00:00:00.000Z`,description:`用 github.dev 配合 github actions 写博客，支持在在线编辑，自动发布`,excerpt:`用 github.dev 配合 github actions 写博客，支持在在线编辑，自动发布`,html:`<p>上回说到可以 <a href="https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md">用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布</a>，最近出了个 github.dev，这么一来写博客就更方便了。</p>
<h3>上回文章在这里看</h3>
<p><a href="https://blakat.cc/write-and-publish-blog-with-gatsby-and-github-workflow/">https://blakat.cc/write-and-publish-blog-with-gatsby-and-github-workflow/</a></p>
<p><a href="https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md">https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md</a></p>
<h3>这次使用 github.dev 写</h3>
<p>之前 <a href="https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md#%E4%BB%8E%E7%BD%91%E9%A1%B5%E5%8F%91%E5%B8%83">从网页发布</a> 一节提到：</p>
<blockquote>
<p>到仓库页面 <a href="https://github.com/liuchong/myblog/tree/master/content/blog">https://github.com/liuchong/myblog/tree/master/content/blog</a> 点击 <strong>Add file -> Create new file</strong> 然后填入 <code>my-title/index.md</code>，写就行了。</p>
</blockquote>
<p>现在可以直接访问 <a href="https://github.dev/liuchong/myblog">https://github.dev/liuchong/myblog</a> 然后在 content/blog 下面新建一个目录比如 <a href="https://github.com/liuchong/myblog/tree/master/content/blog/write-blog-with-github-dev">write-blog-with-github-dev</a>，再创建一个 index.md，开始写就好了。跟普通编辑器一样，可以打开多个文件，可以预览 markdown。在浏览器里写东西总感觉不放心，好像一不小心就会丢了似的，实际上不用担心：打开的文件标签可以关闭重新打开，浏览器标签可以关闭甚至浏览器也可以整个关闭然后重新打开，文章是不会丢失的。</p>
<p>写完切换到源代码管理标签，提交就行了，之前我们有设置好的发布工作流，运行完就可以看到文章了。</p>
<p>比如这篇就是这样写的，也不是特别有用不过还行，特定场景下还是会有些作用的罢。</p>`,previousSlug:`/write-and-publish-blog-with-gatsby-and-github-workflow/`,nextSlug:`/use-google-java-format/`},{slug:`/use-google-java-format/`,title:`使用 google-java-format`,date:`June 11, 2022`,dateISO:`2022-06-11T00:00:00.000Z`,description:`使用 google-java-format 格式化 Java 代码`,excerpt:`使用 google-java-format 格式化 Java 代码`,html:`<p><a href="https://github.com/google/google-java-format">google-java-format</a>是一款优秀的 Java 源代码格式化工具，使用的是<a href="https://google.github.io/styleguide/javaguide.html">Google Java Style</a>，下面让我们来看一下怎么配置。</p>
<h3>配置项目</h3>
<p>使用了 Gradle 的 Kotlin DSL，我们可以在 build.gradle.kts 里面加入这两项配置：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">plugins {
</span><span class="code-line">  id("com.diffplug.spotless") version "6.7.0"
</span><span class="code-line">}
</span></code></pre></div>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">  spotless {
</span><span class="code-line">    java {
</span><span class="code-line">      target("src/*/java/**/*.java")
</span><span class="code-line">      importOrder()
</span><span class="code-line">      removeUnusedImports()
</span><span class="code-line">      trimTrailingWhitespace()
</span><span class="code-line">      indentWithSpaces(4)
</span><span class="code-line">      endWithNewline()
</span><span class="code-line">      googleJavaFormat()
</span><span class="code-line">    }
</span><span class="code-line">  }
</span></code></pre></div>
<p>我们不想在每个子项目里面都重复配置，所以可以在 <code>parent</code> build.gradle.kts 里面这样配置：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">plugins {
</span><span class="code-line">  id("com.diffplug.spotless") version "6.7.0"
</span><span class="code-line">}
</span><span class="code-line">
</span><span class="code-line">allprojects {
</span><span class="code-line">  apply(plugin = "com.diffplug.spotless")
</span><span class="code-line">
</span><span class="code-line">  afterEvaluate {
</span><span class="code-line">    val spotless = tasks.findByName("spotlessCheck")
</span><span class="code-line">      if (spotless != null) {
</span><span class="code-line">        tasks.withType&#x3C;Test> {
</span><span class="code-line">          dependsOn(spotless)
</span><span class="code-line">        }
</span><span class="code-line">    }
</span><span class="code-line">  }
</span><span class="code-line">
</span><span class="code-line">  spotless {
</span><span class="code-line">    java {
</span><span class="code-line">      target("src/*/java/**/*.java")
</span><span class="code-line">      importOrder()
</span><span class="code-line">      removeUnusedImports()
</span><span class="code-line">      trimTrailingWhitespace()
</span><span class="code-line">      indentWithSpaces(4)
</span><span class="code-line">      endWithNewline()
</span><span class="code-line">      googleJavaFormat()
</span><span class="code-line">    }
</span><span class="code-line">  }
</span><span class="code-line">}
</span></code></pre></div>
<p>其中 <code>afterEvaluate</code> 一项配置使得每当我们测试的时候，先检查代码格式化情况，更好地保持保证代码一直处于格式化的状态。</p>
<p>或者如果想省事儿也可以这样配置，让我们测试、编译代码的时候都自动进行代码格式化：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">  afterEvaluate {
</span><span class="code-line">    val spotless = tasks.findByName("spotlessApply")
</span><span class="code-line">      if (spotless != null) {
</span><span class="code-line">        tasks.withType&#x3C;JavaCompile> {
</span><span class="code-line">          dependsOn(spotless)
</span><span class="code-line">        }
</span><span class="code-line">    }
</span><span class="code-line">  }
</span></code></pre></div>
<h3>配置编辑器</h3>
<p>这里使用了 Emacs 编辑器，需要加载 <a href="https://raw.githubusercontent.com/google/google-java-format/master/core/src/main/scripts/google-java-format.el">google-java-format.el</a>，将文件下载下来放入 Emacs 可以正常加载的目录。</p>
<p>需要下载或者编译 google-java-format，可以直接从 <a href="https://github.com/google/google-java-format/releases">发布页面</a> 进行下载。下载后将如下脚本保存成名为 <code>google-java-format</code> 的文件，并执行 chmod +x google-java-format。</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">#!/bin/bash
</span><span class="code-line">exec java -jar "/path/to/google-java-format.jar" "$@"
</span></code></pre></div>
<p>还需要配置 emacs，一个典型的配置如下：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">  (require 'google-java-format)
</span><span class="code-line">  (setq google-java-format-executable "/path/to/google-java-format")
</span><span class="code-line">    (add-hook 'java-mode-hook (lambda ()
</span><span class="code-line">                              (add-hook 'before-save-hook 'google-java-format-buffer nil t)
</span><span class="code-line">                              (global-set-key (kbd "C-c SPC") 'google-java-format)))
</span></code></pre></div>
<p>配置了保存时自动格式化，并绑定了一个快捷键。</p>
<p>Emacs 编辑器在 <code>java-mode</code> 的缩进可能是 4，为了让写代码的时候更舒服一点，如果不想全局配置，可以将如下配置写入项目根目录的 <code>.dir-locals.el</code> 文件：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">((java-mode
</span><span class="code-line">  (c-basic-offset . 2)
</span><span class="code-line">  (tab-width . 2)
</span><span class="code-line">  (indent-tabs-mode . nil)))
</span></code></pre></div>
<h3>Native Image 编译</h3>
<p>前面直接使用 Java 执行 jar 文件，会明显感觉到延迟。如果在意的话，可以使用 <a href="https://www.graalvm.org/22.1/reference-manual/native-image/">Native Image</a> 编译。</p>
<p>安装 GraalVM 后将其配置到 <code>JAVA_HOME</code>，并执行 <code>gu install native-image</code> 来安装 <code>Native Image</code>。</p>
<p>然后下载 google-java-format 源码并编译：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">git clone git@github.com:google/google-java-format.git
</span><span class="code-line">cd google-java-format
</span><span class="code-line">mvn -Pnative -DskipTests package
</span></code></pre></div>
<p>编译完成后从 target 目录将 <code>google-java-format</code> 可执行文件复制到合适的路径，配置到编辑器中即可。为了适配不同的环境，我将 MacOS 上编译的文件命名为 google-java-format.macos，还是用脚本启动。</p>
<p>脚本大体是这个样子：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">#!/bin/bash
</span><span class="code-line">
</span><span class="code-line"># export JAVA_HOME=...
</span><span class="code-line">export BASE_DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" &#x26;&#x26; pwd )"
</span><span class="code-line">
</span><span class="code-line">if [ $(uname) == 'Darwin' ];
</span><span class="code-line">then
</span><span class="code-line">    \${BASE_DIR}/google-java-format.macos "$@"
</span><span class="code-line">else
</span><span class="code-line">    exec "\${JAVA_HOME}/bin/java" -jar "\${BASE_DIR}/google-java-format-1.15.0-all-deps.jar" "$@"
</span><span class="code-line">fi
</span></code></pre></div>
<p>可以明显感受到命令执行速度的提升。</p>`,previousSlug:`/write-blog-with-github-dev/`,nextSlug:null}],postsDescending:[{slug:`/use-google-java-format/`,title:`使用 google-java-format`,date:`June 11, 2022`,dateISO:`2022-06-11T00:00:00.000Z`,description:`使用 google-java-format 格式化 Java 代码`,excerpt:`使用 google-java-format 格式化 Java 代码`,html:`<p><a href="https://github.com/google/google-java-format">google-java-format</a>是一款优秀的 Java 源代码格式化工具，使用的是<a href="https://google.github.io/styleguide/javaguide.html">Google Java Style</a>，下面让我们来看一下怎么配置。</p>
<h3>配置项目</h3>
<p>使用了 Gradle 的 Kotlin DSL，我们可以在 build.gradle.kts 里面加入这两项配置：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">plugins {
</span><span class="code-line">  id("com.diffplug.spotless") version "6.7.0"
</span><span class="code-line">}
</span></code></pre></div>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">  spotless {
</span><span class="code-line">    java {
</span><span class="code-line">      target("src/*/java/**/*.java")
</span><span class="code-line">      importOrder()
</span><span class="code-line">      removeUnusedImports()
</span><span class="code-line">      trimTrailingWhitespace()
</span><span class="code-line">      indentWithSpaces(4)
</span><span class="code-line">      endWithNewline()
</span><span class="code-line">      googleJavaFormat()
</span><span class="code-line">    }
</span><span class="code-line">  }
</span></code></pre></div>
<p>我们不想在每个子项目里面都重复配置，所以可以在 <code>parent</code> build.gradle.kts 里面这样配置：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">plugins {
</span><span class="code-line">  id("com.diffplug.spotless") version "6.7.0"
</span><span class="code-line">}
</span><span class="code-line">
</span><span class="code-line">allprojects {
</span><span class="code-line">  apply(plugin = "com.diffplug.spotless")
</span><span class="code-line">
</span><span class="code-line">  afterEvaluate {
</span><span class="code-line">    val spotless = tasks.findByName("spotlessCheck")
</span><span class="code-line">      if (spotless != null) {
</span><span class="code-line">        tasks.withType&#x3C;Test> {
</span><span class="code-line">          dependsOn(spotless)
</span><span class="code-line">        }
</span><span class="code-line">    }
</span><span class="code-line">  }
</span><span class="code-line">
</span><span class="code-line">  spotless {
</span><span class="code-line">    java {
</span><span class="code-line">      target("src/*/java/**/*.java")
</span><span class="code-line">      importOrder()
</span><span class="code-line">      removeUnusedImports()
</span><span class="code-line">      trimTrailingWhitespace()
</span><span class="code-line">      indentWithSpaces(4)
</span><span class="code-line">      endWithNewline()
</span><span class="code-line">      googleJavaFormat()
</span><span class="code-line">    }
</span><span class="code-line">  }
</span><span class="code-line">}
</span></code></pre></div>
<p>其中 <code>afterEvaluate</code> 一项配置使得每当我们测试的时候，先检查代码格式化情况，更好地保持保证代码一直处于格式化的状态。</p>
<p>或者如果想省事儿也可以这样配置，让我们测试、编译代码的时候都自动进行代码格式化：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">  afterEvaluate {
</span><span class="code-line">    val spotless = tasks.findByName("spotlessApply")
</span><span class="code-line">      if (spotless != null) {
</span><span class="code-line">        tasks.withType&#x3C;JavaCompile> {
</span><span class="code-line">          dependsOn(spotless)
</span><span class="code-line">        }
</span><span class="code-line">    }
</span><span class="code-line">  }
</span></code></pre></div>
<h3>配置编辑器</h3>
<p>这里使用了 Emacs 编辑器，需要加载 <a href="https://raw.githubusercontent.com/google/google-java-format/master/core/src/main/scripts/google-java-format.el">google-java-format.el</a>，将文件下载下来放入 Emacs 可以正常加载的目录。</p>
<p>需要下载或者编译 google-java-format，可以直接从 <a href="https://github.com/google/google-java-format/releases">发布页面</a> 进行下载。下载后将如下脚本保存成名为 <code>google-java-format</code> 的文件，并执行 chmod +x google-java-format。</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">#!/bin/bash
</span><span class="code-line">exec java -jar "/path/to/google-java-format.jar" "$@"
</span></code></pre></div>
<p>还需要配置 emacs，一个典型的配置如下：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">  (require 'google-java-format)
</span><span class="code-line">  (setq google-java-format-executable "/path/to/google-java-format")
</span><span class="code-line">    (add-hook 'java-mode-hook (lambda ()
</span><span class="code-line">                              (add-hook 'before-save-hook 'google-java-format-buffer nil t)
</span><span class="code-line">                              (global-set-key (kbd "C-c SPC") 'google-java-format)))
</span></code></pre></div>
<p>配置了保存时自动格式化，并绑定了一个快捷键。</p>
<p>Emacs 编辑器在 <code>java-mode</code> 的缩进可能是 4，为了让写代码的时候更舒服一点，如果不想全局配置，可以将如下配置写入项目根目录的 <code>.dir-locals.el</code> 文件：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">((java-mode
</span><span class="code-line">  (c-basic-offset . 2)
</span><span class="code-line">  (tab-width . 2)
</span><span class="code-line">  (indent-tabs-mode . nil)))
</span></code></pre></div>
<h3>Native Image 编译</h3>
<p>前面直接使用 Java 执行 jar 文件，会明显感觉到延迟。如果在意的话，可以使用 <a href="https://www.graalvm.org/22.1/reference-manual/native-image/">Native Image</a> 编译。</p>
<p>安装 GraalVM 后将其配置到 <code>JAVA_HOME</code>，并执行 <code>gu install native-image</code> 来安装 <code>Native Image</code>。</p>
<p>然后下载 google-java-format 源码并编译：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">git clone git@github.com:google/google-java-format.git
</span><span class="code-line">cd google-java-format
</span><span class="code-line">mvn -Pnative -DskipTests package
</span></code></pre></div>
<p>编译完成后从 target 目录将 <code>google-java-format</code> 可执行文件复制到合适的路径，配置到编辑器中即可。为了适配不同的环境，我将 MacOS 上编译的文件命名为 google-java-format.macos，还是用脚本启动。</p>
<p>脚本大体是这个样子：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">#!/bin/bash
</span><span class="code-line">
</span><span class="code-line"># export JAVA_HOME=...
</span><span class="code-line">export BASE_DIR="$( cd "$( dirname "\${BASH_SOURCE[0]}" )" &#x26;&#x26; pwd )"
</span><span class="code-line">
</span><span class="code-line">if [ $(uname) == 'Darwin' ];
</span><span class="code-line">then
</span><span class="code-line">    \${BASE_DIR}/google-java-format.macos "$@"
</span><span class="code-line">else
</span><span class="code-line">    exec "\${JAVA_HOME}/bin/java" -jar "\${BASE_DIR}/google-java-format-1.15.0-all-deps.jar" "$@"
</span><span class="code-line">fi
</span></code></pre></div>
<p>可以明显感受到命令执行速度的提升。</p>`,previousSlug:`/write-blog-with-github-dev/`,nextSlug:null},{slug:`/write-blog-with-github-dev/`,title:`用 github.dev 写博客`,date:`August 26, 2021`,dateISO:`2021-08-26T00:00:00.000Z`,description:`用 github.dev 配合 github actions 写博客，支持在在线编辑，自动发布`,excerpt:`用 github.dev 配合 github actions 写博客，支持在在线编辑，自动发布`,html:`<p>上回说到可以 <a href="https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md">用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布</a>，最近出了个 github.dev，这么一来写博客就更方便了。</p>
<h3>上回文章在这里看</h3>
<p><a href="https://blakat.cc/write-and-publish-blog-with-gatsby-and-github-workflow/">https://blakat.cc/write-and-publish-blog-with-gatsby-and-github-workflow/</a></p>
<p><a href="https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md">https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md</a></p>
<h3>这次使用 github.dev 写</h3>
<p>之前 <a href="https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md#%E4%BB%8E%E7%BD%91%E9%A1%B5%E5%8F%91%E5%B8%83">从网页发布</a> 一节提到：</p>
<blockquote>
<p>到仓库页面 <a href="https://github.com/liuchong/myblog/tree/master/content/blog">https://github.com/liuchong/myblog/tree/master/content/blog</a> 点击 <strong>Add file -> Create new file</strong> 然后填入 <code>my-title/index.md</code>，写就行了。</p>
</blockquote>
<p>现在可以直接访问 <a href="https://github.dev/liuchong/myblog">https://github.dev/liuchong/myblog</a> 然后在 content/blog 下面新建一个目录比如 <a href="https://github.com/liuchong/myblog/tree/master/content/blog/write-blog-with-github-dev">write-blog-with-github-dev</a>，再创建一个 index.md，开始写就好了。跟普通编辑器一样，可以打开多个文件，可以预览 markdown。在浏览器里写东西总感觉不放心，好像一不小心就会丢了似的，实际上不用担心：打开的文件标签可以关闭重新打开，浏览器标签可以关闭甚至浏览器也可以整个关闭然后重新打开，文章是不会丢失的。</p>
<p>写完切换到源代码管理标签，提交就行了，之前我们有设置好的发布工作流，运行完就可以看到文章了。</p>
<p>比如这篇就是这样写的，也不是特别有用不过还行，特定场景下还是会有些作用的罢。</p>`,previousSlug:`/write-and-publish-blog-with-gatsby-and-github-workflow/`,nextSlug:`/use-google-java-format/`},{slug:`/write-and-publish-blog-with-gatsby-and-github-workflow/`,title:`用 gatsby 和 github workflow 写博客`,date:`December 17, 2020`,dateISO:`2020-12-17T00:00:00.000Z`,description:`用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布`,excerpt:`用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布`,html:`<p>这里是本<a href="/">博客</a>的<a href="https://github.com/liuchong/myblog">仓库</a>。</p>
<p>之前用的也是 <a href="https://www.gatsbyjs.com/">gatsby</a>，自己改出来了一个 <a href="https://github.com/liuchong/gatsby-starter-blog-typescript">gatsby-starter-blog-typescript</a>，但已经年久失修不想维护了。
于是直接把博客的清空了仓库，更新到最新的官方模板 <a href="https://github.com/gatsbyjs/gatsby-starter-blog">gatsby-starter-blog</a>。</p>
<h3>安装 gatsby</h3>
<p>详细过程可以参考官方文档 <a href="https://www.gatsbyjs.com/tutorial/">https://www.gatsbyjs.com/tutorial/</a>，我这里有完整的环境，只需要运行命令：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">npm install -g gatsby-cli
</span><span class="code-line">npx gatsby new myblog https://github.com/gatsbyjs/gatsby-starter-blog
</span></code></pre></div>
<p>运行完了，把一些文件里面按照需要改一下就可以使用了：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">content/assets/
</span><span class="code-line">src/components/bio.js
</span><span class="code-line">gatsby-config.js
</span></code></pre></div>
<p>预览一下：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">npx gatsby develop
</span></code></pre></div>
<p>执行完命令打开 <a href="http://localhost:8000/">http://localhost:8000/</a> 可以看到几个示范文章已经在那里了。</p>
<p>我还在 <code>static</code> 目录放置了一些文件，它们会被原封不动的复制到网站目录。
比如 <code>CNAME</code> 用来在 github pages 绑定域名，后面会发布后就可以用到。</p>
<p>安装完后，可以创建一个 github 仓库，我这里就是 <code>myblog</code>，把代码提交后推到仓库里。</p>
<h3>写文章</h3>
<p>我们看到，在 <code>content/blog/</code> 有一些目录，里面分别有一个 index.md，这就是文章了。比如我们参观一下这个 <code>hello-world</code>：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">---
</span><span class="code-line">title: Hello World
</span><span class="code-line">date: "2015-05-01T22:12:03.284Z"
</span><span class="code-line">description: "Hello World"
</span><span class="code-line">---
</span><span class="code-line">
</span><span class="code-line">This is my first post on my new fake blog! How exciting!
</span><span class="code-line">... 此处省略很多字
</span></code></pre></div>
<p>现在这些展示文章的任务就圆满完成了，我们愿意的话可以把它们删除。然后比着它们的格式，打开咱喜欢的编辑器，写起来吧！</p>
<p>安装一个工具 <code>gh-pages</code> 尝试发布一下，进行观赏：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">npm install --save-dev gh-pages
</span><span class="code-line">npx gh-pages -b public -d public -r https://github.com/liuchong/myblog.git
</span></code></pre></div>
<p>上面命令用 gh-pages 工具把 public 目录发到了 public 分支，更详细可参考 <a href="https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/">https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/</a>。
在项目设置里面设置 github pages 分支，点击显示出来的那个链接博客就出来了。</p>
<p>到目前为止，还不错是吧！</p>
<h3>设置 workflow</h3>
<p>你看，写完有一步发布过程，挺麻烦的；而且什么时候没有环境或者甚至只有一个浏览器，那就发布不了了。</p>
<p>幸亏有 github actions，用上它就方便多了。</p>
<p>我直接把 workflow 配置文件 <code>.github/workflows/publish.yml</code> 贴到这里，假设源码提交到了 <code>master</code> 分支：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">name: Publish
</span><span class="code-line">
</span><span class="code-line">on:
</span><span class="code-line">  push:
</span><span class="code-line">    branches:
</span><span class="code-line">      - master
</span><span class="code-line">
</span><span class="code-line">jobs:
</span><span class="code-line">  build:
</span><span class="code-line">    runs-on: ubuntu-latest
</span><span class="code-line">    steps:
</span><span class="code-line">      - uses: actions/checkout@v1
</span><span class="code-line">      - name: Publish
</span><span class="code-line">        run: |
</span><span class="code-line">          git config user.email \${{github.actor}}@users.noreply.github.com
</span><span class="code-line">          git config user.name \${{github.actor}}
</span><span class="code-line">          npm install
</span><span class="code-line">          npx gatsby build
</span><span class="code-line">          npx gh-pages -b public -d public -r https://\${{ secrets.PUBLISH }}@github.com/\${{ github.repository }}
</span></code></pre></div>
<p>要注意的是 <code>secrets.PUBLISH</code> 这个要手动在 <a href="https://github.com/settings/tokens">https://github.com/settings/tokens</a> 创建 token，
然后再到项目里面，比如我就是在 <a href="https://github.com/liuchong/myblog/settings/secrets/actions">https://github.com/liuchong/myblog/settings/secrets/actions</a>，添加一个 secrets 项，
<code>Name</code>那项就填的 <code>PUBLISH</code>。</p>
<p>说明一下，这个链接 <a href="https://docs.github.com/cn/free-pro-team@latest/actions/reference/authentication-in-a-workflow">https://docs.github.com/cn/free-pro-team@latest/actions/reference/authentication-in-a-workflow</a> 上面还有个 <code>secrets.GITHUB_TOKEN</code>，
说是自动创建的，不过我没有使用成功。</p>
<p>如果发布有问题，可以试着手动执行一下命令测试，注意 <code>***</code> 改成自己的 secret：</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">gh-pages -b public -d public -r https://***@github.com/liuchong/myblog.git
</span></code></pre></div>
<h3>从网页发布</h3>
<p>到仓库页面 <a href="https://github.com/liuchong/myblog/tree/master/content/blog">https://github.com/liuchong/myblog/tree/master/content/blog</a> 点击 <strong>Add file -> Create new file</strong> 然后填入 <code>my-title/index.md</code>，写就行了。</p>
<p>我这篇博客就是在网页上面写的，其中 <code>date</code> 条目我手工写的，所以简化了一下，像 <code>date: "2020-12-17"</code> 这样也是可以的，不用那么精确。</p>
<p>不太推荐直接在网页上面写，我写完后点击了一下 preview，又点回编辑界面时失败了一下，还以为文章没了，有点吓人 👀</p>`,previousSlug:`/simple-snowflake-in-go-and-rust/`,nextSlug:`/write-blog-with-github-dev/`},{slug:`/simple-snowflake-in-go-and-rust/`,title:`simple snowflake in go and rust`,date:`March 17, 2019`,dateISO:`2019-03-16T17:39:21.000Z`,description:`https://github.com/liuchong/sf & https://github.com/liuchong/fid`,excerpt:`https://github.com/liuchong/sf &amp; https://github.com/liuchong/fid`,html:`<p><a href="https://github.com/liuchong/sf">https://github.com/liuchong/sf</a></p>
<p><a href="https://github.com/liuchong/fid">https://github.com/liuchong/fid</a></p>`,previousSlug:`/rewrite-blockchain-tutorial-in-rust/`,nextSlug:`/write-and-publish-blog-with-gatsby-and-github-workflow/`},{slug:`/rewrite-blockchain-tutorial-in-rust/`,title:`rewrite blockchain tutorial in rust`,date:`March 06, 2019`,dateISO:`2019-03-06T04:44:30.000Z`,description:`简单重写了个 Rust 版的 blockchain-tuorial，代码不是太严谨`,excerpt:`简单重写了个 Rust 版的 blockchain-tuorial，代码不是太严谨`,html:`<h1>简单重写了个 Rust 版的 blockchain-tuorial</h1>
<p>看了篇文章</p>
<blockquote>
<p><a href="https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc">https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc</a></p>
</blockquote>
<blockquote>
<p><a href="https://github.com/mycoralhealth/blockchain-tutorial">https://github.com/mycoralhealth/blockchain-tutorial</a></p>
</blockquote>
<p>想着没几行代码，就用 Rust 简单写了下，写得不是多严谨。</p>
<p>我的代码在
<a href="https://github.com/liuchong/blockchain-tutorial" target="_blank"><img src="/images/bomb.png" alt="@liuchong/blockchain-tutorial" width="32" height="32" align="bottom"></a></p>`,previousSlug:`/write-a-third-party-cargo-subcommand/`,nextSlug:`/simple-snowflake-in-go-and-rust/`},{slug:`/write-a-third-party-cargo-subcommand/`,title:`写一个第三方 cargo 子命令`,date:`December 18, 2018`,dateISO:`2018-12-18T13:26:11.000Z`,description:`写一个 cargo 子命令，把 shell 命令存到配置文件里面`,excerpt:`写一个 cargo 子命令，把 shell 命令存到配置文件里面`,html:`<p>写项目的时候，有时候会写一些较长的 shell 命令，反复输入不方便，也容易丢失，就想着把它放到配置文件里。</p>
<p>阅读了 cargo 官方 <a href="https://github.com/rust-lang/cargo/wiki/Third-party-cargo-subcommands">wiki</a></p>
<p>阅读了 cargo 官方 <a href="https://doc.rust-lang.org/cargo/reference/external-tools.html">reference</a></p>
<p>观察目录 ~/.cargo/bin/ 下面的文件，发现一些比如 racer、rls、rustfmt 等命令，是可以直接运行的，还有一些 cargo- 开头的命令，比如 cargo-clippy、cargo-fmt，就是运行 cargo clippy、cargo fmt 等命令时执行的程序。</p>
<p>试一下，</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">cd ~/.cargo/bin/
</span><span class="code-line">ln -s racer cargo-racer
</span><span class="code-line">cargo racer
</span></code></pre></div>
<p>输出比较不是很正常，看上去是把字符串“racer”当做参数传给了命令 racer，不过也对刚才的调查做了简单证实。</p>
<div class="gatsby-highlight"><pre><code class="code-highlight"><span class="code-line">error: Found argument 'racer' which wasn't expected, or isn't valid in this context
</span><span class="code-line">
</span><span class="code-line">USAGE:
</span><span class="code-line">...
</span></code></pre></div>
<h4>编码</h4>
<ol>
<li>创建项目 cargo new cargo-x</li>
<li>写代码</li>
<li>发布项目 cargo publish</li>
</ol>
<h4>仓库</h4>
<p>写了一个非常简单的版本，代码在
<a href="https://github.com/liuchong/cargo-x" target="_blank"><img src="/images/bomb.png" alt="@liuchong/cargo-x" width="32" height="32" align="bottom"></a></p>`,previousSlug:`/ngrok-tunnels-example/`,nextSlug:`/rewrite-blockchain-tutorial-in-rust/`},{slug:`/ngrok-tunnels-example/`,title:`ngrok tunnels example`,date:`July 10, 2018`,dateISO:`2018-07-10T13:16:55.000Z`,description:`created an example repository of simple ngrok tunnels.`,excerpt:`created an example repository of simple ngrok tunnels.`,html:`<p>Created an example repository of simple ngrok tunnels on github:
<a href="https://github.com/liuchong/ngrok-tunnels-example">ngrok-tunnels-example</a></p>
<p>Note:<br>
Maybe <a href="https://github.com/fatedier/frp">frp</a> is a better choice.</p>`,previousSlug:`/nginx-router-example/`,nextSlug:`/write-a-third-party-cargo-subcommand/`},{slug:`/nginx-router-example/`,title:`nginx router example`,date:`March 06, 2017`,dateISO:`2017-03-06T01:33:15.000Z`,description:`created an example repository of simple dynamic routing application to show the usage of openresty.`,excerpt:`created an example repository of simple dynamic routing application to show the usage of openresty.`,html:`<p>Created an example repository of simple dynamic routing application to show the usage of openresty on github:
<a href="https://github.com/liuchong/ngx-router-example">ngx-router-example</a></p>`,previousSlug:null,nextSlug:`/ngrok-tunnels-example/`}],postsBySlug:JSON.parse(`{"/nginx-router-example/":{"slug":"/nginx-router-example/","title":"nginx router example","date":"March 06, 2017","dateISO":"2017-03-06T01:33:15.000Z","description":"created an example repository of simple dynamic routing application to show the usage of openresty.","excerpt":"created an example repository of simple dynamic routing application to show the usage of openresty.","html":"<p>Created an example repository of simple dynamic routing application to show the usage of openresty on github:\\n<a href=\\"https://github.com/liuchong/ngx-router-example\\">ngx-router-example</a></p>","previousSlug":null,"nextSlug":"/ngrok-tunnels-example/"},"/ngrok-tunnels-example/":{"slug":"/ngrok-tunnels-example/","title":"ngrok tunnels example","date":"July 10, 2018","dateISO":"2018-07-10T13:16:55.000Z","description":"created an example repository of simple ngrok tunnels.","excerpt":"created an example repository of simple ngrok tunnels.","html":"<p>Created an example repository of simple ngrok tunnels on github:\\n<a href=\\"https://github.com/liuchong/ngrok-tunnels-example\\">ngrok-tunnels-example</a></p>\\n<p>Note:<br>\\nMaybe <a href=\\"https://github.com/fatedier/frp\\">frp</a> is a better choice.</p>","previousSlug":"/nginx-router-example/","nextSlug":"/write-a-third-party-cargo-subcommand/"},"/write-a-third-party-cargo-subcommand/":{"slug":"/write-a-third-party-cargo-subcommand/","title":"写一个第三方 cargo 子命令","date":"December 18, 2018","dateISO":"2018-12-18T13:26:11.000Z","description":"写一个 cargo 子命令，把 shell 命令存到配置文件里面","excerpt":"写一个 cargo 子命令，把 shell 命令存到配置文件里面","html":"<p>写项目的时候，有时候会写一些较长的 shell 命令，反复输入不方便，也容易丢失，就想着把它放到配置文件里。</p>\\n<p>阅读了 cargo 官方 <a href=\\"https://github.com/rust-lang/cargo/wiki/Third-party-cargo-subcommands\\">wiki</a></p>\\n<p>阅读了 cargo 官方 <a href=\\"https://doc.rust-lang.org/cargo/reference/external-tools.html\\">reference</a></p>\\n<p>观察目录 ~/.cargo/bin/ 下面的文件，发现一些比如 racer、rls、rustfmt 等命令，是可以直接运行的，还有一些 cargo- 开头的命令，比如 cargo-clippy、cargo-fmt，就是运行 cargo clippy、cargo fmt 等命令时执行的程序。</p>\\n<p>试一下，</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">cd ~/.cargo/bin/\\n</span><span class=\\"code-line\\">ln -s racer cargo-racer\\n</span><span class=\\"code-line\\">cargo racer\\n</span></code></pre></div>\\n<p>输出比较不是很正常，看上去是把字符串“racer”当做参数传给了命令 racer，不过也对刚才的调查做了简单证实。</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">error: Found argument 'racer' which wasn't expected, or isn't valid in this context\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">USAGE:\\n</span><span class=\\"code-line\\">...\\n</span></code></pre></div>\\n<h4>编码</h4>\\n<ol>\\n<li>创建项目 cargo new cargo-x</li>\\n<li>写代码</li>\\n<li>发布项目 cargo publish</li>\\n</ol>\\n<h4>仓库</h4>\\n<p>写了一个非常简单的版本，代码在\\n<a href=\\"https://github.com/liuchong/cargo-x\\" target=\\"_blank\\"><img src=\\"/images/bomb.png\\" alt=\\"@liuchong/cargo-x\\" width=\\"32\\" height=\\"32\\" align=\\"bottom\\"></a></p>","previousSlug":"/ngrok-tunnels-example/","nextSlug":"/rewrite-blockchain-tutorial-in-rust/"},"/rewrite-blockchain-tutorial-in-rust/":{"slug":"/rewrite-blockchain-tutorial-in-rust/","title":"rewrite blockchain tutorial in rust","date":"March 06, 2019","dateISO":"2019-03-06T04:44:30.000Z","description":"简单重写了个 Rust 版的 blockchain-tuorial，代码不是太严谨","excerpt":"简单重写了个 Rust 版的 blockchain-tuorial，代码不是太严谨","html":"<h1>简单重写了个 Rust 版的 blockchain-tuorial</h1>\\n<p>看了篇文章</p>\\n<blockquote>\\n<p><a href=\\"https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc\\">https://medium.com/@mycoralhealth/code-your-own-blockchain-in-less-than-200-lines-of-go-e296282bcffc</a></p>\\n</blockquote>\\n<blockquote>\\n<p><a href=\\"https://github.com/mycoralhealth/blockchain-tutorial\\">https://github.com/mycoralhealth/blockchain-tutorial</a></p>\\n</blockquote>\\n<p>想着没几行代码，就用 Rust 简单写了下，写得不是多严谨。</p>\\n<p>我的代码在\\n<a href=\\"https://github.com/liuchong/blockchain-tutorial\\" target=\\"_blank\\"><img src=\\"/images/bomb.png\\" alt=\\"@liuchong/blockchain-tutorial\\" width=\\"32\\" height=\\"32\\" align=\\"bottom\\"></a></p>","previousSlug":"/write-a-third-party-cargo-subcommand/","nextSlug":"/simple-snowflake-in-go-and-rust/"},"/simple-snowflake-in-go-and-rust/":{"slug":"/simple-snowflake-in-go-and-rust/","title":"simple snowflake in go and rust","date":"March 17, 2019","dateISO":"2019-03-16T17:39:21.000Z","description":"https://github.com/liuchong/sf & https://github.com/liuchong/fid","excerpt":"https://github.com/liuchong/sf &amp; https://github.com/liuchong/fid","html":"<p><a href=\\"https://github.com/liuchong/sf\\">https://github.com/liuchong/sf</a></p>\\n<p><a href=\\"https://github.com/liuchong/fid\\">https://github.com/liuchong/fid</a></p>","previousSlug":"/rewrite-blockchain-tutorial-in-rust/","nextSlug":"/write-and-publish-blog-with-gatsby-and-github-workflow/"},"/write-and-publish-blog-with-gatsby-and-github-workflow/":{"slug":"/write-and-publish-blog-with-gatsby-and-github-workflow/","title":"用 gatsby 和 github workflow 写博客","date":"December 17, 2020","dateISO":"2020-12-17T00:00:00.000Z","description":"用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布","excerpt":"用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布","html":"<p>这里是本<a href=\\"/\\">博客</a>的<a href=\\"https://github.com/liuchong/myblog\\">仓库</a>。</p>\\n<p>之前用的也是 <a href=\\"https://www.gatsbyjs.com/\\">gatsby</a>，自己改出来了一个 <a href=\\"https://github.com/liuchong/gatsby-starter-blog-typescript\\">gatsby-starter-blog-typescript</a>，但已经年久失修不想维护了。\\n于是直接把博客的清空了仓库，更新到最新的官方模板 <a href=\\"https://github.com/gatsbyjs/gatsby-starter-blog\\">gatsby-starter-blog</a>。</p>\\n<h3>安装 gatsby</h3>\\n<p>详细过程可以参考官方文档 <a href=\\"https://www.gatsbyjs.com/tutorial/\\">https://www.gatsbyjs.com/tutorial/</a>，我这里有完整的环境，只需要运行命令：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">npm install -g gatsby-cli\\n</span><span class=\\"code-line\\">npx gatsby new myblog https://github.com/gatsbyjs/gatsby-starter-blog\\n</span></code></pre></div>\\n<p>运行完了，把一些文件里面按照需要改一下就可以使用了：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">content/assets/\\n</span><span class=\\"code-line\\">src/components/bio.js\\n</span><span class=\\"code-line\\">gatsby-config.js\\n</span></code></pre></div>\\n<p>预览一下：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">npx gatsby develop\\n</span></code></pre></div>\\n<p>执行完命令打开 <a href=\\"http://localhost:8000/\\">http://localhost:8000/</a> 可以看到几个示范文章已经在那里了。</p>\\n<p>我还在 <code>static</code> 目录放置了一些文件，它们会被原封不动的复制到网站目录。\\n比如 <code>CNAME</code> 用来在 github pages 绑定域名，后面会发布后就可以用到。</p>\\n<p>安装完后，可以创建一个 github 仓库，我这里就是 <code>myblog</code>，把代码提交后推到仓库里。</p>\\n<h3>写文章</h3>\\n<p>我们看到，在 <code>content/blog/</code> 有一些目录，里面分别有一个 index.md，这就是文章了。比如我们参观一下这个 <code>hello-world</code>：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">---\\n</span><span class=\\"code-line\\">title: Hello World\\n</span><span class=\\"code-line\\">date: \\"2015-05-01T22:12:03.284Z\\"\\n</span><span class=\\"code-line\\">description: \\"Hello World\\"\\n</span><span class=\\"code-line\\">---\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">This is my first post on my new fake blog! How exciting!\\n</span><span class=\\"code-line\\">... 此处省略很多字\\n</span></code></pre></div>\\n<p>现在这些展示文章的任务就圆满完成了，我们愿意的话可以把它们删除。然后比着它们的格式，打开咱喜欢的编辑器，写起来吧！</p>\\n<p>安装一个工具 <code>gh-pages</code> 尝试发布一下，进行观赏：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">npm install --save-dev gh-pages\\n</span><span class=\\"code-line\\">npx gh-pages -b public -d public -r https://github.com/liuchong/myblog.git\\n</span></code></pre></div>\\n<p>上面命令用 gh-pages 工具把 public 目录发到了 public 分支，更详细可参考 <a href=\\"https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/\\">https://www.gatsbyjs.com/docs/how-gatsby-works-with-github-pages/</a>。\\n在项目设置里面设置 github pages 分支，点击显示出来的那个链接博客就出来了。</p>\\n<p>到目前为止，还不错是吧！</p>\\n<h3>设置 workflow</h3>\\n<p>你看，写完有一步发布过程，挺麻烦的；而且什么时候没有环境或者甚至只有一个浏览器，那就发布不了了。</p>\\n<p>幸亏有 github actions，用上它就方便多了。</p>\\n<p>我直接把 workflow 配置文件 <code>.github/workflows/publish.yml</code> 贴到这里，假设源码提交到了 <code>master</code> 分支：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">name: Publish\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">on:\\n</span><span class=\\"code-line\\">  push:\\n</span><span class=\\"code-line\\">    branches:\\n</span><span class=\\"code-line\\">      - master\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">jobs:\\n</span><span class=\\"code-line\\">  build:\\n</span><span class=\\"code-line\\">    runs-on: ubuntu-latest\\n</span><span class=\\"code-line\\">    steps:\\n</span><span class=\\"code-line\\">      - uses: actions/checkout@v1\\n</span><span class=\\"code-line\\">      - name: Publish\\n</span><span class=\\"code-line\\">        run: |\\n</span><span class=\\"code-line\\">          git config user.email \${{github.actor}}@users.noreply.github.com\\n</span><span class=\\"code-line\\">          git config user.name \${{github.actor}}\\n</span><span class=\\"code-line\\">          npm install\\n</span><span class=\\"code-line\\">          npx gatsby build\\n</span><span class=\\"code-line\\">          npx gh-pages -b public -d public -r https://\${{ secrets.PUBLISH }}@github.com/\${{ github.repository }}\\n</span></code></pre></div>\\n<p>要注意的是 <code>secrets.PUBLISH</code> 这个要手动在 <a href=\\"https://github.com/settings/tokens\\">https://github.com/settings/tokens</a> 创建 token，\\n然后再到项目里面，比如我就是在 <a href=\\"https://github.com/liuchong/myblog/settings/secrets/actions\\">https://github.com/liuchong/myblog/settings/secrets/actions</a>，添加一个 secrets 项，\\n<code>Name</code>那项就填的 <code>PUBLISH</code>。</p>\\n<p>说明一下，这个链接 <a href=\\"https://docs.github.com/cn/free-pro-team@latest/actions/reference/authentication-in-a-workflow\\">https://docs.github.com/cn/free-pro-team@latest/actions/reference/authentication-in-a-workflow</a> 上面还有个 <code>secrets.GITHUB_TOKEN</code>，\\n说是自动创建的，不过我没有使用成功。</p>\\n<p>如果发布有问题，可以试着手动执行一下命令测试，注意 <code>***</code> 改成自己的 secret：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">gh-pages -b public -d public -r https://***@github.com/liuchong/myblog.git\\n</span></code></pre></div>\\n<h3>从网页发布</h3>\\n<p>到仓库页面 <a href=\\"https://github.com/liuchong/myblog/tree/master/content/blog\\">https://github.com/liuchong/myblog/tree/master/content/blog</a> 点击 <strong>Add file -> Create new file</strong> 然后填入 <code>my-title/index.md</code>，写就行了。</p>\\n<p>我这篇博客就是在网页上面写的，其中 <code>date</code> 条目我手工写的，所以简化了一下，像 <code>date: \\"2020-12-17\\"</code> 这样也是可以的，不用那么精确。</p>\\n<p>不太推荐直接在网页上面写，我写完后点击了一下 preview，又点回编辑界面时失败了一下，还以为文章没了，有点吓人 👀</p>","previousSlug":"/simple-snowflake-in-go-and-rust/","nextSlug":"/write-blog-with-github-dev/"},"/write-blog-with-github-dev/":{"slug":"/write-blog-with-github-dev/","title":"用 github.dev 写博客","date":"August 26, 2021","dateISO":"2021-08-26T00:00:00.000Z","description":"用 github.dev 配合 github actions 写博客，支持在在线编辑，自动发布","excerpt":"用 github.dev 配合 github actions 写博客，支持在在线编辑，自动发布","html":"<p>上回说到可以 <a href=\\"https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md\\">用 gatsby 和 github workflow 写博客，支持在在线编辑，自动发布</a>，最近出了个 github.dev，这么一来写博客就更方便了。</p>\\n<h3>上回文章在这里看</h3>\\n<p><a href=\\"https://blakat.cc/write-and-publish-blog-with-gatsby-and-github-workflow/\\">https://blakat.cc/write-and-publish-blog-with-gatsby-and-github-workflow/</a></p>\\n<p><a href=\\"https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md\\">https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md</a></p>\\n<h3>这次使用 github.dev 写</h3>\\n<p>之前 <a href=\\"https://github.com/liuchong/myblog/blob/master/content/blog/write-and-publish-blog-with-gatsby-and-github-workflow/index.md#%E4%BB%8E%E7%BD%91%E9%A1%B5%E5%8F%91%E5%B8%83\\">从网页发布</a> 一节提到：</p>\\n<blockquote>\\n<p>到仓库页面 <a href=\\"https://github.com/liuchong/myblog/tree/master/content/blog\\">https://github.com/liuchong/myblog/tree/master/content/blog</a> 点击 <strong>Add file -> Create new file</strong> 然后填入 <code>my-title/index.md</code>，写就行了。</p>\\n</blockquote>\\n<p>现在可以直接访问 <a href=\\"https://github.dev/liuchong/myblog\\">https://github.dev/liuchong/myblog</a> 然后在 content/blog 下面新建一个目录比如 <a href=\\"https://github.com/liuchong/myblog/tree/master/content/blog/write-blog-with-github-dev\\">write-blog-with-github-dev</a>，再创建一个 index.md，开始写就好了。跟普通编辑器一样，可以打开多个文件，可以预览 markdown。在浏览器里写东西总感觉不放心，好像一不小心就会丢了似的，实际上不用担心：打开的文件标签可以关闭重新打开，浏览器标签可以关闭甚至浏览器也可以整个关闭然后重新打开，文章是不会丢失的。</p>\\n<p>写完切换到源代码管理标签，提交就行了，之前我们有设置好的发布工作流，运行完就可以看到文章了。</p>\\n<p>比如这篇就是这样写的，也不是特别有用不过还行，特定场景下还是会有些作用的罢。</p>","previousSlug":"/write-and-publish-blog-with-gatsby-and-github-workflow/","nextSlug":"/use-google-java-format/"},"/use-google-java-format/":{"slug":"/use-google-java-format/","title":"使用 google-java-format","date":"June 11, 2022","dateISO":"2022-06-11T00:00:00.000Z","description":"使用 google-java-format 格式化 Java 代码","excerpt":"使用 google-java-format 格式化 Java 代码","html":"<p><a href=\\"https://github.com/google/google-java-format\\">google-java-format</a>是一款优秀的 Java 源代码格式化工具，使用的是<a href=\\"https://google.github.io/styleguide/javaguide.html\\">Google Java Style</a>，下面让我们来看一下怎么配置。</p>\\n<h3>配置项目</h3>\\n<p>使用了 Gradle 的 Kotlin DSL，我们可以在 build.gradle.kts 里面加入这两项配置：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">plugins {\\n</span><span class=\\"code-line\\">  id(\\"com.diffplug.spotless\\") version \\"6.7.0\\"\\n</span><span class=\\"code-line\\">}\\n</span></code></pre></div>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">  spotless {\\n</span><span class=\\"code-line\\">    java {\\n</span><span class=\\"code-line\\">      target(\\"src/*/java/**/*.java\\")\\n</span><span class=\\"code-line\\">      importOrder()\\n</span><span class=\\"code-line\\">      removeUnusedImports()\\n</span><span class=\\"code-line\\">      trimTrailingWhitespace()\\n</span><span class=\\"code-line\\">      indentWithSpaces(4)\\n</span><span class=\\"code-line\\">      endWithNewline()\\n</span><span class=\\"code-line\\">      googleJavaFormat()\\n</span><span class=\\"code-line\\">    }\\n</span><span class=\\"code-line\\">  }\\n</span></code></pre></div>\\n<p>我们不想在每个子项目里面都重复配置，所以可以在 <code>parent</code> build.gradle.kts 里面这样配置：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">plugins {\\n</span><span class=\\"code-line\\">  id(\\"com.diffplug.spotless\\") version \\"6.7.0\\"\\n</span><span class=\\"code-line\\">}\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">allprojects {\\n</span><span class=\\"code-line\\">  apply(plugin = \\"com.diffplug.spotless\\")\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">  afterEvaluate {\\n</span><span class=\\"code-line\\">    val spotless = tasks.findByName(\\"spotlessCheck\\")\\n</span><span class=\\"code-line\\">      if (spotless != null) {\\n</span><span class=\\"code-line\\">        tasks.withType&#x3C;Test> {\\n</span><span class=\\"code-line\\">          dependsOn(spotless)\\n</span><span class=\\"code-line\\">        }\\n</span><span class=\\"code-line\\">    }\\n</span><span class=\\"code-line\\">  }\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">  spotless {\\n</span><span class=\\"code-line\\">    java {\\n</span><span class=\\"code-line\\">      target(\\"src/*/java/**/*.java\\")\\n</span><span class=\\"code-line\\">      importOrder()\\n</span><span class=\\"code-line\\">      removeUnusedImports()\\n</span><span class=\\"code-line\\">      trimTrailingWhitespace()\\n</span><span class=\\"code-line\\">      indentWithSpaces(4)\\n</span><span class=\\"code-line\\">      endWithNewline()\\n</span><span class=\\"code-line\\">      googleJavaFormat()\\n</span><span class=\\"code-line\\">    }\\n</span><span class=\\"code-line\\">  }\\n</span><span class=\\"code-line\\">}\\n</span></code></pre></div>\\n<p>其中 <code>afterEvaluate</code> 一项配置使得每当我们测试的时候，先检查代码格式化情况，更好地保持保证代码一直处于格式化的状态。</p>\\n<p>或者如果想省事儿也可以这样配置，让我们测试、编译代码的时候都自动进行代码格式化：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">  afterEvaluate {\\n</span><span class=\\"code-line\\">    val spotless = tasks.findByName(\\"spotlessApply\\")\\n</span><span class=\\"code-line\\">      if (spotless != null) {\\n</span><span class=\\"code-line\\">        tasks.withType&#x3C;JavaCompile> {\\n</span><span class=\\"code-line\\">          dependsOn(spotless)\\n</span><span class=\\"code-line\\">        }\\n</span><span class=\\"code-line\\">    }\\n</span><span class=\\"code-line\\">  }\\n</span></code></pre></div>\\n<h3>配置编辑器</h3>\\n<p>这里使用了 Emacs 编辑器，需要加载 <a href=\\"https://raw.githubusercontent.com/google/google-java-format/master/core/src/main/scripts/google-java-format.el\\">google-java-format.el</a>，将文件下载下来放入 Emacs 可以正常加载的目录。</p>\\n<p>需要下载或者编译 google-java-format，可以直接从 <a href=\\"https://github.com/google/google-java-format/releases\\">发布页面</a> 进行下载。下载后将如下脚本保存成名为 <code>google-java-format</code> 的文件，并执行 chmod +x google-java-format。</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">#!/bin/bash\\n</span><span class=\\"code-line\\">exec java -jar \\"/path/to/google-java-format.jar\\" \\"$@\\"\\n</span></code></pre></div>\\n<p>还需要配置 emacs，一个典型的配置如下：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">  (require 'google-java-format)\\n</span><span class=\\"code-line\\">  (setq google-java-format-executable \\"/path/to/google-java-format\\")\\n</span><span class=\\"code-line\\">    (add-hook 'java-mode-hook (lambda ()\\n</span><span class=\\"code-line\\">                              (add-hook 'before-save-hook 'google-java-format-buffer nil t)\\n</span><span class=\\"code-line\\">                              (global-set-key (kbd \\"C-c SPC\\") 'google-java-format)))\\n</span></code></pre></div>\\n<p>配置了保存时自动格式化，并绑定了一个快捷键。</p>\\n<p>Emacs 编辑器在 <code>java-mode</code> 的缩进可能是 4，为了让写代码的时候更舒服一点，如果不想全局配置，可以将如下配置写入项目根目录的 <code>.dir-locals.el</code> 文件：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">((java-mode\\n</span><span class=\\"code-line\\">  (c-basic-offset . 2)\\n</span><span class=\\"code-line\\">  (tab-width . 2)\\n</span><span class=\\"code-line\\">  (indent-tabs-mode . nil)))\\n</span></code></pre></div>\\n<h3>Native Image 编译</h3>\\n<p>前面直接使用 Java 执行 jar 文件，会明显感觉到延迟。如果在意的话，可以使用 <a href=\\"https://www.graalvm.org/22.1/reference-manual/native-image/\\">Native Image</a> 编译。</p>\\n<p>安装 GraalVM 后将其配置到 <code>JAVA_HOME</code>，并执行 <code>gu install native-image</code> 来安装 <code>Native Image</code>。</p>\\n<p>然后下载 google-java-format 源码并编译：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">git clone git@github.com:google/google-java-format.git\\n</span><span class=\\"code-line\\">cd google-java-format\\n</span><span class=\\"code-line\\">mvn -Pnative -DskipTests package\\n</span></code></pre></div>\\n<p>编译完成后从 target 目录将 <code>google-java-format</code> 可执行文件复制到合适的路径，配置到编辑器中即可。为了适配不同的环境，我将 MacOS 上编译的文件命名为 google-java-format.macos，还是用脚本启动。</p>\\n<p>脚本大体是这个样子：</p>\\n<div class=\\"gatsby-highlight\\"><pre><code class=\\"code-highlight\\"><span class=\\"code-line\\">#!/bin/bash\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\"># export JAVA_HOME=...\\n</span><span class=\\"code-line\\">export BASE_DIR=\\"$( cd \\"$( dirname \\"\${BASH_SOURCE[0]}\\" )\\" &#x26;&#x26; pwd )\\"\\n</span><span class=\\"code-line\\">\\n</span><span class=\\"code-line\\">if [ $(uname) == 'Darwin' ];\\n</span><span class=\\"code-line\\">then\\n</span><span class=\\"code-line\\">    \${BASE_DIR}/google-java-format.macos \\"$@\\"\\n</span><span class=\\"code-line\\">else\\n</span><span class=\\"code-line\\">    exec \\"\${JAVA_HOME}/bin/java\\" -jar \\"\${BASE_DIR}/google-java-format-1.15.0-all-deps.jar\\" \\"$@\\"\\n</span><span class=\\"code-line\\">fi\\n</span></code></pre></div>\\n<p>可以明显感受到命令执行速度的提升。</p>","previousSlug":"/write-blog-with-github-dev/","nextSlug":null}}`)};export{e as default};