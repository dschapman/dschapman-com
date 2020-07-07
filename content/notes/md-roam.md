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

First I [[setup a second org-roam directory]] by creating a `.dir-locals.el` file.

I also added the following lines to my `config.el` file:

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

Once I had everything configured I opened my notes directory and created the org-roam database by running `M-x org-roam-db-build-cache``.

Finally because this is in a sub folder of my git-controlled website I added `.dir-locals.el` and `org-roam.db` to my .git-ignore file.

## Usage

Still figuring this out. At first I was disappointed to realize that I couldn't just click on the wiki-style double bracket links to jump to the relevant files. Backlinks were showing up but I couldn't click. I then discovered that in markdown-mode you follow links by typing C-c C-o. This will jump to the file if it exists or create it if it doesn't.

## Troubleshooting

My markdown files had spaces in the title. This caused some trouble so I renamed them, replacing the spaces with `-`
