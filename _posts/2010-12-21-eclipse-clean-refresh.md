---
title: 'Eclipse: -clean -refresh'
author: Markus Tacker
layout: post
permalink: eclipse-clean-refresh
lang: de
categories:
  - development
tags:
  - eclipse
---
Manchmal, also eigentlich regelmäßig, hängt Eclipse.

> The User Operation is waiting for background work to complete

oder ähnliche extrem *hilfreiche* Statusmeldungen hängen dann gerne mal ungefragt bis zum [Sankt-Nimmerleins-Tag][1] auf dem Bildschirm rum.

Da hilft nur ein

> `eclipse -clean -refresh`

Das dauert zwar etwas länger, beseitigt aber z.B. Deadlocks, die für die Hänger verantwortlich sind.

 [1]: http://de.wikipedia.org/wiki/Sankt_Nimmerlein
