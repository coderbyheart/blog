---
title: Darstellung von git diff verbessern
author: Markus Tacker
layout: post
permalink: /darstellung-von-git-diff-verbessern
lang: de
categories:
  - Snippets
tags:
  - git
---
Hier sind ein paar Einstellungen die die Darstellung der Ausgabe von `git diff` und weiteren git-Kommandos lesbarer machen:

Farbige Ausgabe aktivieren, für alle Ausgaben:

`git config --global color.ui true`

Lange Zeile umbrechen:

`git config --global core.pager 'less -r'`

Hat man wenige Änderungen in langen Zeilen vorgenommen, ist der Switch `--word-diff` sehr hilfreich. Dieser Zeigt in geänderten Zeilen zusätzlich die geänderten Wörter an:

`git diff --word-diff`
