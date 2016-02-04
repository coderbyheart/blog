---
title: Schneller Syntax-Check für modifizierte PHP-Dateien
author: Markus Tacker
layout: post
permalink: schneller-syntax-check-fur-modifizierte-php-dateien
lang: de
categories:
  - Snippets
tags:
  - bash
  - php
  - svn
---
Ja, manchmal muss man halt via SSH auf Maschinen rumhacken, auf denen es kein vernünftiges Error-Reporting gibt. Und wenn dann die Seite weiß bleibt, hilft dieses Kommando, um heraus zur finden, welche der Dateien man zerschossen hat:

`svn status | grep "\.php$" | grep "^M" | awk '{ print $2; }' | xargs -i php -l {}`

Das `svn status` am Anfang verrät schon, zumindest über eine SVN working copy zu verfügen ist dabei äußerst hilfreich.

Die Alternative dazu, ohne SVN ist

` find ./ -type f -name "*.php" | xargs -i php -l {}`

was aber natürlich sehr viel langsamer ist.
