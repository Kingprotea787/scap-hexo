---
title: Ren'Py引擎rpa文件的解包与反编译
subtitle: Unpacking and decompilation of rpa files for the Ren'Py engine
date: 2025-03-08
author: ゼカツまし
banner: /img/renpy.jpg
tags:
  - Ren'py
  - 工具
excerpt: Ren'Py is a visual novel engine – used by thousands of creators from around the world – that helps you use words, images, and sounds to tell interactive stories that run on computers and mobile devices. These can be both visual novels and life simulation games. The easy to learn script language allows anyone to efficiently write large visual novels, while its Python scripting is enough for complex simulation games. Ren'Py is open source and free for commercial use.
layout: post  # 指定布局为 post.ejs
---

## `.rpa` 解包
我使用的是[unrpa](https://github.com/Lattyware/unrpa)，具体用法可查看作者文档。

使用pip安装（需要python3）：`py -3 -m pip install unrpa`

CLI用法如下：
```
usage: unrpa [-h] [-v] [-s] [-l | -t] [-p PATH] [-m] [--version]
             [--continue-on-error] [-f VERSION] [-o OFFSET] [-k KEY]
             FILENAME [FILENAME ...]
```

一般我个人比较常用的就是`unrpa -mp "PATH\TO\DEST" "PATH\TO\archive.rpa"`，其中`-m`表示若目标路径不存在则创建该路径；当然如果已经`cd`到目标目录那就执行`unrpa "PATH\TO\archive.rpa"`即可。

## 反编译
此时解包出来的文件通常为`.rpyc`，也就是经过*Ren'Py*编译`.rpy`源码之后产生的文件，为了修改内容，此时就需要对其进行反编译。我用的是[unrpyc](https://github.com/CensoredUsername/unrpyc)，作者提供了命令行工具以及一个自动化的`un.rpyc`工具（作者发布的release就是`un.rpyc`，想要用CLI还需要自己去下源码）。
由于电脑上没安装python2（懒，所以本文使用的是基于`python >=3.9`的`unrpyc v2.0.2`。并且v2只支持 *Ren'Py* 8 以上，若是低版本还需安装v1（当然实际用下来好像没什么问题

对于命令行工具，我一般使用的命令为`python unrpyc.py -c *.rpyc`，即直接反编译当前目录下所有`.rpyc`文件，并使用`-c`选项覆盖已存在的`.rpy`文件。详细的选项在文档中也有给出，此处便不一一赘述，就贴一下`--help`罢。
```
$ py -3 unrpyc.py --help
usage: unrpyc.py [-h] [-c] [-d] [-p {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15}]
                 [-t TRANSLATION_FILE] [-T WRITE_TRANSLATION_FILE]
                 [-l LANGUAGE] [--sl1-as-python] [--comparable] [--no-pyexpr]
                 [--no-init-offset] [--try-harder]
                 [--register-sl-displayable SL_CUSTOM_NAMES [SL_CUSTOM_NAMES ...]]
                 file [file ...]

Decompile .rpyc/.rpymc files

positional arguments:
  file                  The filenames to decompile. All .rpyc files in any
                        directories passed or their subdirectories will also
                        be decompiled.

optional arguments:
  -h, --help            show this help message and exit
  -c, --clobber         overwrites existing output files
  -d, --dump            instead of decompiling, pretty print the ast to a file
  -p, --processes
                        use the specified number or processes to
                        decompile. Defaults to the amount of hw threads
                        available minus one, disabled when muliprocessing is
                        unavailable.
  -t TRANSLATION_FILE, --translation-file TRANSLATION_FILE
                        use the specified file to translate during
                        decompilation
  -T WRITE_TRANSLATION_FILE, --write-translation-file WRITE_TRANSLATION_FILE
                        store translations in the specified file instead of
                        decompiling
  -l LANGUAGE, --language LANGUAGE
                        if writing a translation file, the language of the
                        translations to write
  --comparable          Only for dumping, remove several false differences
                        when comparing dumps. This suppresses attributes that
                        are different even when the code is identical, such as
                        file modification times.
  --no-pyexpr           Only for dumping, disable special handling of PyExpr
                        objects, instead printing them as strings. This is
                        useful when comparing dumps from different versions of
                        Ren'Py. It should only be used if necessary, since it
                        will cause loss of information such as line numbers.
  --no-init-offset      By default, unrpyc attempt to guess when init offset
                        statements were used and insert them. This is always safe
                        to do for ren'py 8, but as it is based on a heuristic it
                        can be disabled.
                        The generated code is exactly equivalent, only slightly more cluttered.
  --try-harder          Tries some workarounds against common obfuscation
                        methods. This is a lot slower.
  --register-sl-displayable SL_CUSTOM_NAMES [SL_CUSTOM_NAMES ...]
                        Accepts mapping separated by '=', where the first
                        argument is the name of the user-defined displayable
                        object, and the second argument is a string containing
                        the name of the displayable,potentially followed by a
                        '-', and the amount of children the displayable
                        takes(valid options are '0', '1' or 'many', with
                        'many' being the default)
```