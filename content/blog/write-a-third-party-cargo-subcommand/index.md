---
title: write a third party cargo subcommand
date: "2018-12-18T21:26:11+08:00"
path: "/write-a-third-party-cargo-subcommand/"
---

# 写一个第三方 cargo 子命令

## 动机

写项目的时候，有时候会写一些较长的 shell 命令，反复输入不方便，也容易丢失，就想着把它放到配置文件里。

## 动手

### 调研

阅读了 cargo 官方 [wiki](https://github.com/rust-lang/cargo/wiki/Third-party-cargo-subcommands)

阅读了 cargo 官方 [reference](https://doc.rust-lang.org/cargo/reference/external-tools.html)

观察目录 ~/.cargo/bin/ 下面的文件，发现一些比如 racer、rls、rustfmt 等命令，是可以直接运行的，还有一些 cargo- 开头的命令，比如 cargo-clippy、cargo-fmt，就是运行 cargo clippy、cargo fmt 等命令时执行的程序。

试一下，
```
cd ~/.cargo/bin/
ln -s racer cargo-racer
cargo racer
```

输出比较不是很正常，看上去是把字符串“racer”当做参数传给了命令 racer，不过也对刚才的调查做了简单证实。
```
error: Found argument 'racer' which wasn't expected, or isn't valid in this context

USAGE:
...
```

### 编码

1. 创建项目 cargo new cargo-x
2. 写代码
3. 发布项目 cargo publish

### 仓库

写了一个非常简单的版本，代码在 [![@liuchong/cargo-x](/images/favicon.ico)](https://github.com/liuchong/cargo-x)
