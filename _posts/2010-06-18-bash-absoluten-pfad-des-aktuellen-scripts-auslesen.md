---
title: 'Bash: Absoluten Pfad des aktuellen Scripts auslesen'
author: Markus Tacker
layout: post
permalink: /bash-absoluten-pfad-des-aktuellen-scripts-auslesen
categories:
  - Snippets
tags:
  - bash
  - shell
---
Oft ruft man Bash-Scripte ja mit relativen Pfaden auf:

> `$ ./util.sh<br />
`

Dieses kleine Snippet liefert einem in diesem Fall den absoluten Pfad zum aktuellen Script.

> ``#!/bin/bash<br />
MYDIR="`cd $0; pwd`"<br />
echo $MYDIR<br />
``

Möchte man den absoluten Pfad zu einem Verzeichnis weiter oben, nimmt man dieses Snippet:

> ``#!/bin/bash<br />
MYDIR=`dirname $0`<br />
PARENT="`cd $MYDIR/../; pwd`"<br />
``