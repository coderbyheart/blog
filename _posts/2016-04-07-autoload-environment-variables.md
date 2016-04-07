---
title: 'Autoload environment variables'
layout: post
permalink: autoload-environment-variables
date:   2016-04-17 13:50:00
categories:
  - development
tags:
  - tips
---

When developing stateless microservices it can be tedious to set up the correct environment variables.
You can teach your bash/zsh to load them on a per directory basis.

If you add this to your `.bashrc` or `.zshrc.local` a file called `.env` will be sourced if it is present
in the directory you are cd-ing into:

    cd()
    {
        builtin cd "$@"
        if [ -f $PWD/.env ]
        then
                . $PWD/.env
        fi
    }

In my project directory I have a `.env` file with these contents:

    #!/bin/bash

    export MY_FOO_ENV=bar

    echo MY_FOO_ENV=$MY_FOO_ENV

Now everytime I run my project the correct environment is set.
