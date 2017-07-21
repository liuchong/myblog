---
title: build mongodb with scons & pyenv
date: 2017-07-21 20:24:49
tags:
---
在使用Scons构建Mongodb的时候，报了个找不到typing包的错误，检查后发现python使用了pyenv下面自己安装的版本，而scons命令却使用了系统的。
在构建脚本中，如果执行scons的python版本如果合适的话，就直接使用了：
``` python
def find_python(min_version=(2, 5)):
    try:
        if sys.version_info >= min_version:
            return sys.executable
    except AttributeError:
        # In case the version of Python is somehow missing sys.version_info or sys.executable.                                                                                                        
        pass

    ...此处省略
```

解决方法很简单，由于scons是一个python库，直接运行 'pip install scons' 在自己的python里面安装一个。