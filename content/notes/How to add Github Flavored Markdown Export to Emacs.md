---
title: How to add Github Flavored Markdown Export to Emacs
---
I use [[Doom Emacs]]. In order to add Github Flavored Markdown (gfm) instead of the default markdown export open `packages.el` in your Doom Emacs and add `(package! ox-gfm)`.

Then after reloading Doom run `M-x org-pandoc-export-to-gfm` to export the current org file open in the Emacs buffer to a gfm file