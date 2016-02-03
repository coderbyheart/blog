---
title: PyDev und PIL
author: Markus Tacker
layout: post
permalink: pydev-und-pil/
lang: de
categories:
  - development
tags:
  - eclipse
  - pydev
  - python
---
PyDev meckert standardmäßig über ein

`from PIL import Image`

da es die Bibliothek nicht finden kann.

[Dieser FAQ-Eintrag][1] hilft da ein wenig weiter.

In den Einstellungen findet sich uner *PyDev ➜ Interpreter &#8211; Python* der Reiter *Forced Builtins* unter dem man mittels *New* den Eintrag *PIL* einträgt.

[<img class="alignnone size-medium wp-image-99" title="PyDev forced builtins" src="/uploads/2011/05/pydev-forced-builtins-300x265.jpg" alt="" width="300" height="265" />][2]

 [1]: http://pydev.org/faq.html#what_is_that_forced_builtin_libs_in_the_python_i
 [2]: /uploads/2011/05/pydev-forced-builtins.jpeg
