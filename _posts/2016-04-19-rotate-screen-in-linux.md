---
title: 'Rotate screen in Linux'
layout: post
permalink: rotate-screen-in-linux
categories:
  - development
tags:
  - tips
---

Sometimes it can be useful to rotate a screen, e.g. to have one display in portrait. This command will rotate your screen:

    # find the name of your actual output (in this example DVI-I-3) with this command
    xrandr --listmonitors
    # Apply rotation
    xrandr --output DVI-I-3 --rotate left
    
