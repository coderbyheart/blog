---
title: Intents auf Android testen
author: Markus Tacker
layout: post
permalink: intents-auf-android-testen/
lang: de
categories:
  - Snippets
tags:
  - android
---
Mit der adb shell ist es einfach möglich das Handling von Intents zu testen &#8230; sehr praktisch, wenn man z.B. in der App normalerweise einen QR-Code-Scanner verwendet, um eine URL zu erhalten.

Das Kommando 

`adb shell am start -a android.intent.action.VIEW -d 'http://www.google.de'`

öffnet z.B. den Browser.
