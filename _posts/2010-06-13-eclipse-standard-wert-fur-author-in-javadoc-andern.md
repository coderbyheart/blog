---
title: 'Eclipse: Standard-Wert für @author in JavaDoc ändern'
author: Markus Tacker
layout: post
permalink: /eclipse-standard-wert-fur-author-in-javadoc-andern
categories:
  - Technik
tags:
  - eclipse
  - java
---
Der Standard-Werte für den `@author`-Tag in JavaDoc ist der Username des Accounts, der Eclipse gestartet hat.

Dies lässt sich einfach überschreiben, in dem man in der `<a href="http://wiki.eclipse.org/Eclipse.ini">eclipse.ini</a>`, die sich im Programm-Ordner von eclipse findet, diese Zeile einfügt:

> `-Duser.name=Some User <someuser@example.com>`