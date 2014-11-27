---
title: Meine .subversion/config
author: Markus Tacker
layout: post
permalink: /meine-subversionconfig
categories:
  - Technik
tags:
  - svn
---
`[helpers]<br />
diff-cmd = colordiff<br />
diff-args = --ignore-all-space --ignore-blank-lines</p>
<p>[miscellany]<br />
enable-auto-props = yes</p>
<p>[auto-props]<br />
* = svn:keywords=Id Rev</p>
<p>[auth]<br />
# Verhindert die Verwendung von Keychain / Keyring<br />
password-stores =<br />
`