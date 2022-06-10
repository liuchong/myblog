---
title: 使用 google-java-format
date: "2022-06-11"
description: "使用 google-java-format 格式化 Java 代码"
---

[google-java-format](https://github.com/google/google-java-format)是一款优秀的 Java 源代码格式化工具，使用的是[Google Java Style](https://google.github.io/styleguide/javaguide.html)，下面让我们来看一下怎么配置。

### 配置项目

使用了 Gradle 的 Kotlin DSL，我们可以在 build.gradle.kts 里面加入这两项配置：

```
plugins {
  id("com.diffplug.spotless") version "6.7.0"
}
```
```
  spotless {
    java {
      target("src/*/java/**/*.java")
      importOrder()
      removeUnusedImports()
      trimTrailingWhitespace()
      indentWithSpaces(4)
      endWithNewline()
      googleJavaFormat()
    }
  }
```

我们不想在每个子项目里面都重复配置，所以可以在 `parent` build.gradle.kts 里面这样配置：

```
plugins {
  id("com.diffplug.spotless") version "6.7.0"
}

allprojects {
  apply(plugin = "com.diffplug.spotless")

  afterEvaluate {
    val spotless = tasks.findByName("spotlessApply")
      if (spotless != null) {
        tasks.withType<JavaCompile> {
          finalizedBy(spotless)
        }
    }
  }

  spotless {
    java {
      target("src/*/java/**/*.java")
      importOrder()
      removeUnusedImports()
      trimTrailingWhitespace()
      indentWithSpaces(4)
      endWithNewline()
      googleJavaFormat()
    }
  }
}
```

其中 `afterEvaluate` 一项配置使得每当我们测试·、编译的时候自动运行格式化，更好地保持保证代码一直处于格式化的状态。

### 配置编辑器

这里使用了 Emacs 编辑器，需要加载 [google-java-format.el](https://raw.githubusercontent.com/google/google-java-format/master/core/src/main/scripts/google-java-format.el)，将文件下载下来放入 Emacs 可以正常加载的目录。

需要下载或者编译 google-java-format，可以直接从 [发布页面](https://github.com/google/google-java-format/releases) 进行下载。下载后将如下脚本保存成名为 `google-java-format` 的文件，并执行 chmod +x google-java-format。

```
#!/bin/bash
exec java -jar "/path/to/google-java-format.jar" "$@"
```

还需要配置 emacs，一个典型的配置如下：

```
  (require 'google-java-format)
  (setq google-java-format-executable "/path/to/google-java-format")
    (add-hook 'java-mode-hook (lambda ()
                              (add-hook 'before-save-hook 'google-java-format-buffer nil t)
                              (global-set-key (kbd "C-c SPC") 'google-java-format)))
```

配置了保存时自动格式化，并绑定了一个快捷键。

Emacs 编辑器在 `java-mode` 的缩进可能是 4，为了让写代码的时候更舒服一点，如果不想全局配置，可以将如下配置写入项目根目录的 `.dir-locals.el` 文件：

```
((java-mode
  (c-basic-offset . 2)
  (tab-width . 2)
  (indent-tabs-mode . nil)))
```

### Native Image 编译

前面直接使用 Java 执行 jar 文件，会明显感觉到延迟。如果在意的话，可以使用 [Native Image](https://www.graalvm.org/22.1/reference-manual/native-image/) 编译。

安装 GraalVM 后将其配置到 `JAVA_HOME`，并执行 `gu install native-image` 来安装 `Native Image`。

然后下载 google-java-format 源码并编译：

```
git clone git@github.com:google/google-java-format.git
cd google-java-format
mvn -Pnative -DskipTests package
```

编译完成后从 target 目录将 `google-java-format` 可执行文件复制到合适的路径，配置到编辑器中即可。为了适配不同的环境，我将 MacOS 上编译的文件命名为 google-java-format.macos，还是用脚本启动。

脚本大体是这个样子：

```
#!/bin/bash

# export JAVA_HOME=...
export BASE_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ $(uname) == 'Darwin' ];
then
    ${BASE_DIR}/google-java-format.macos "$@"
else
    exec "${JAVA_HOME}/bin/java" -jar "${BASE_DIR}/google-java-format-1.15.0-all-deps.jar" "$@"
fi
```

可以明显感受到命令执行速度的提升。
