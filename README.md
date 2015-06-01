
# angrycoders/system-www

> User Interface for [angrycoders/system](https://github.com/angrycoders/system) and ecosystem


## prerequisites:

1. [ruby](https://www.ruby-lang.org/) (with [ruby-gems](https://rubygems.org/))
1. [nodejs](http://nodejs.org) (for [npm](https://www.npmjs.com))
1. [wget for Windows](http://gnuwin32.sourceforge.net/packages/wget.htm)


## dependencies:

To install dependencies:

```bash
⇒ script/deps.sh # for *nix
⇒ script\deps.bat # for Windows
```


## building:

```bash
⇒ script/build.sh # for *nix
⇒ script\build.bat # for Windows
```

Static files will be placed in the directory `_out/`.


## developing:

```bash
⇒ script/start_server.sh # for *nix
⇒ script\start_server.bat # for Windows
```

This will build the static files and watch for changes.

To view the items not done yet, you need to install [td](https://github.com/Swatto/td/releases/tag/1.2.0).

```bash
⇒ td # view items undone
```


## license:

**The MIT License (MIT)**

Copyright (c) 2015 AngryCoders

