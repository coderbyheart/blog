---
title: Alle ISO-Dateien in einem Verzeichnis nach UTF-8 konvertieren
author: Markus Tacker
layout: post
permalink: /alle-iso-dateien-in-einem-verzeichnis-nach-utf-8-konvertieren
categories:
  - Snippets
tags:
  - bash
  - Linux
  - UTF-8
---
Dieses Bash-Script konvertiert alle Nicht-UTF-8-Dateien in einem Verzeichnis und in allen Unterverzeichnissen nach UTF-8.

`find ./ -type f -name "*.php" | xargs file | grep ISO-8859 | awk '{print substr( $1, 0, length($1) - 1); }' | xargs -i recode ISO-8859-1..UTF-8 {} `