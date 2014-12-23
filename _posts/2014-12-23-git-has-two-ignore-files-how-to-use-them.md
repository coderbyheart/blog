---
layout: post
title:  "Git has two ignore files-how to use them"
date:   2014-12-23 12:00:00
categories:
- development
- git
permalink: git-has-two-ignore-files-how-to-use-them
---

Actually, git has as many files to define ignore patterns as you like. 
You can put one in each directory of your project. 

You are probably aware of the `.gitignore` file in the project root folder. 
It's where you put patterns matching generated assets, temp files, caches, etc.
As a rule of thumb this file should only contain files which **everyone** will exist
for everyone who uses the project.

If you have files which are specific to your environment, you should not litter the
`.gitignore` with them! Instead, put them into `.git/info/exclude`. This file is local to 
your checkout and does not get published. This is the place where you put your IDE's
config files e.g. Eclipse's `.project` file or IntelliJ's `.idea` folder.

See the official documentation on [gitignore](http://git-scm.com/docs/gitignore) for more 
information on ignoring files with git.
