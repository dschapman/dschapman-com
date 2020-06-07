---
title: md-roam
---

- [website](https://github.com/nobiot/md-roam)

md-roam is an extension of [[Org-Roam]] that allows you to implement [[bidirectional links]] in markdown files. I installed in my [[Doom Emacs]] setup.

## Installation

To install the package using Doom I added the following lines to my `packages.el` file:
```lisp
(package! md-roam :recipe
  (:host github :repo "nobiot/md-roam"))
(unpin! org-roam)
```
Notice that the package is installed _before_ org-roam is.

I set up md-roam as a second [[Org-Roam]] folder - which means that it has its own database file separate from my "main" one. The md-roam are _almost_ formatted the same as [[gatsby-theme-brain]] files and so my existing public notes folder on my website did not need to change much.<Footnote count={1}>I did have to remove quotation marks from the title in the frontmatter of my markdown notes. md-roam doesn't expect a quote delineated string.</Footnote>

[[How to install a second org-roam directory]]

I also added the following lines to my `config.el` file.

To use md-roam:
```lisp
(use-package! md-roam ; load immediately, before org-roam
  :config
  (setq md-roam-file-extension-single "md")) 
```

and then also in `config.el` inside the use-package org-roam declaration you should add the following:
```lisp
(use-package! org-roam
:init
  ;; add markdown extension to org-roam-file-extensions list
  (setq org-roam-file-extensions '("org" "md"))
  (setq org-roam-title-sources '((mdtitle title mdheadline headline) (mdalias alias)))
```

I installed markdown-mode just to make sure. M-x package install > markdown-mode.

And then I added a shortcut to quickly open my public_notes folder (defined elsewhere in `config.el`):

```lisp 
(use-package! dired
  :config
  (defun dired-open-public-notes-dir ()
    "Open and switch to `public-notes-directory'."
    (interactive)
    (require 'ido)
    (dired (ido-expand-directory public_notes))))
```

This allows me to quickly open up my notes folder by typing M-x dired-open-public-notes-dir.

Once I had everything configured and able to reload without errors I opened my notes directory and created the org-roam database by running M-x org-roam-db-build-cache.

Finally because this is in a sub folder of my git-controlled website I added `.dir-locals.el` and `org-roam.db` to my .git-ignore file.

## Usage

Still figuring this out. At first I was disappointed to realize that I couldn't just click on the wiki-style double bracket links to jump to the relevant files. Backlinks were showing up but I couldn't click. I then discovered that in markdown-mode you follow links by typing C-c C-o. This will jump to the file if it exists or create it if it doesn't.

I will continue to experiment with this and see how I can continue to use this in my workflow.

## Problems
roam_alias is not usable if I intend to run the local version of my website for development. If I run gatsby develop with any roam aliases defined, the quotation mark format it takes triggers errors in gatsby's markdown processing since `roam_alias: "value 1" "value1" "VALUE1" is not valid YAML`. 

Would it be possible to adjust the value that roam_alias expects?
