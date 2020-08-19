---
title: How I write these notes
roam_alias: ["how I write notes", "how I write these notes", "how I take notes", "taking notes"]
aliases: ["how I write notes", "how I write these notes", "how I take notes", "taking notes"]
---

I used to write almost all of my notes using [[bear]]. The great thing about this is was its ability to easily export to markdown and its gorgeous ui design. However [[Ian Jones]] and [[Zac Jones]] introduced me to [[Org-Roam]] and [[Doom Emacs]]. This allows me all the power and flexibility of Emacs and [[Org-Mode]] and some of the best features of [[Roam Research]]. This does come at the cost of a beautiful mobile app, but I can still capture my notes on mobile using Bear and export them to my Org-Roam folder.

I also discovered [[md-roam]] an unofficial extension of org-roam that allows you to have a markdown folder of roam notes. I have successfully synced this with the content/notes folder of my website to allow my public notes to be easily accessed and updated in Emacs alongside my private notes.

I created a function in Emacs that allows me to quickly open this file by adding this to my [[Doom Emacs]] `config.el` file:

```lisp 
(use-package! dired
  :config
  (defun dc/dired-open-public-notes-dir ()
    "Open and switch to `public-notes-directory'."
    (interactive)
    (require 'ido)
    (dired (ido-expand-directory public_notes))))
```

This allows me to quickly open up my notes folder by typing `M-x dc/dired-open-public-notes-dir`.

When I read books I still prefer to do it with a hard copy that I underline and markup. If the book is particularly impactful I'll do some work to go back and enter my reflections in individual [[book notes]]. Sometimes I do read on my kindle and will highlight passages which I can then copy and paste into markdown notes. *This workflow could use some work*

Currently I take more notes privately than public. Most of my [[learning in public]] has been focused on web-development. In general whenever I solve a problem I try to document the problem and my solution so that I can share if anyone else comes across a similar problem. 

