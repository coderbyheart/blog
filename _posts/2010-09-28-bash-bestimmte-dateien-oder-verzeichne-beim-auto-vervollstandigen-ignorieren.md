---
title: 'Bash: Bestimmte Dateien oder Verzeichnisse beim Auto-Vervollständigen ignorieren'
author: Markus Tacker
layout: post
permalink: /bash-bestimmte-dateien-oder-verzeichne-beim-auto-vervollstandigen-ignorieren
lang: de
categories:
  - development
tags:
  - bash
  - svn
---
Die Bash hat eine tolle Funktion: Mittels der Tab-Taste erhält man eine Liste mit Dateien und Verzeichnissem im aktuell eingegeben Pfad-Abschnitt.

Allerdings nerven da z.B. Verzeichnisse wie &#8220;.svn&#8221; von Subversion, in die man normalerweise nie hinein navigieren möchte.

Zu Hilfe kommt da die Umgebungsvariable `FIGNORE`.

> A  colon-separated  list  of  suffixes to ignore when performing filename completion (see READLINE below).  A filename whose suffix  matches  one of the entries in FIGNORE is excluded from the list of matched filenames.  A sample value is &#8220;.o:~&#8221;.

Ein praktischer Eintrag für Subversion ist dementsprechend: `.svn`. Unter Mac OS bietet sich noch an, `.DS_Store` hinzu zu nehmen.

Diese Zeile wird dann in der Datei ˜/.profile oder ähnlich eingetragen:

`export FIGNORE=".svn:.DS_Store"`
