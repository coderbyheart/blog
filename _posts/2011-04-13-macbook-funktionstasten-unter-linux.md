---
title: MacBook Funktionstasten unter Linux
author: Markus Tacker
layout: post
permalink: /macbook-funktionstasten-unter-linux
categories:
  - Technik
tags:
  - ArchLinux
---
Diese sind, zumindest unter Arch Linux, standardmäßig nur mittels FN+F<1..12> zum auslösen zu bewegen.

Dieser Eintrag in der `/etc/modprobe.d/modprobe.conf` behebt das Problem:

`options hid_apple fnmode=2`