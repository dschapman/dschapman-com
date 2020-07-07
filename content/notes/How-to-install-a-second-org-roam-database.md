---
title: How to install a second org-roam directory
aliases: ["Install a second org-roam directory", "setup a second org-roam directory"]
roam_alias: ["Install a second org-roam directory", "setup a second org-roam directory"]
---

In order to get a second [[org-roam]] database configured I needed to add a `.dir-locals.el` file to the folder where I keep my notes. In my case - content/notes in my git repository. 

This is the content of the file: 
```lisp
((nil . ((org-roam-directory . "~/second-directory/location/"))))
```

This file lets [[emacs]] know that this folder is an org-roam-directory. 
