---
title: PECL crack unter Ubuntu installieren
author: Markus Tacker
layout: post
permalink: /pecl-crack-unter-ubuntu-installieren
categories:
  - Technik
tags:
  - crack
  - pecl
  - php
  - Ubuntu
---
Auch die PECL Erweiterung [crack][1] muss erst überredet werden, sich auf Ubuntu zur Verfügung zu stellen, da beim Installieren folgender Fehler auftritt:

``/tmp/pear/temp/crack/libcrack/src/config.h:1:26: error: ../../config.h: No such file or directory<br />
make: *** [crack.lo] Error 1<br />
ERROR: `make' failed``

Die Lösung ist die manuelle Installation.

`apt-get install cracklib2-dev cracklib-runtime<br />
cd /opt<br />
svn co http://svn.php.net/repository/pecl/crack/trunk pecl-crack-svn<br />
cd pecl-crack-svn<br />
`

Die Datei `libcrack/src/cracklib.h` editieren:`<br />
-# include "../../config.h"<br />
+# include "../config.h"<br />
`

Die Datei `package.xml` editieren:  
`-          <file role="src" name="config.h" /><br />
`

Und dann manuell installieren:  
`pecl install --force package.xml<br />
echo "extension=crack.so" > /etc/php/conf.d/crack.ini<br />
/etc/init.d/apache2 restart<br />
`

 [1]: http://pecl.php.net/package/crack