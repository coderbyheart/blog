---
title: Niedrigen Speicherplatz mit Bash überprüfen und per Mail warnen
author: Markus Tacker
layout: post
permalink: niedrigen-speicherplatz-mit-bash-uberprufen-und-per-mail-warnen
lang: de
categories:
  - Snippets
tags:
  - bash
  - cron
  - Linux
  - Server
  - devops
---
Dieses kleine Bash-Script, versendet als Cronjob eingetragen, E-Mails an den root-User, wenn der Plattenplatz auf allen gemounteten `/dev/hd*`-Platten weniger als 1 GB beträgt.

    for i in `df | grep "/dev/hd" | grep -e "[a-z]$" | awk '{ print $4; }'`; do if [[ $i -gt 999999 ]]; then df -h | mail root -s "Low diskspace warning for `hostname -f`"; break; fi; done
