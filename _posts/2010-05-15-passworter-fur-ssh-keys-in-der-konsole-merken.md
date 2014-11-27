---
title: Passwörter für SSH-Keys in der Konsole merken
author: Markus Tacker
layout: post
permalink: /passworter-fur-ssh-keys-in-der-konsole-merken
categories:
  - Snippets
tags:
  - Linux
  - SSH
---
Um sich die wiederkehrende Passwort-Abfragen für SSH-Keys auf der Konsole zu sparen, führt man folgende Kommandos aus:

`eval "$(/usr/bin/ssh-agent -s)"<br />
ssh-add -L`

Das startet den SSh-Key-Agent und damit ist das Passwort des Keys für die aktuelle Sitzung gespeichert und wird nicht mehr abgefragt.