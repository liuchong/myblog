---
title: build mongodb with scons & venv
date: "2017-07-21T20:24:49.000Z"
path: "/build-mongodb-with-scons-venv/"
---
在使用Scons构建Mongodb的时候，报了个找不到typing包的错误，检查后发现python使用了venv下面自己安装的版本，而scons命令却使用了系统的。
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

需要注意的是，bash会有命令缓存，可以检查一下scons实际使用的是哪一个，下面是可能的输出：
``` bash
> hash -t scons
/usr/bin/scons
```
可以直接使用命令 'hash -d scons' 将其清除，然后就可以正常使用scons构建了。
