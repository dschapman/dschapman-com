---
title: How to Mix Monospace and Variable Width Fonts in Doom Emacs
---

[[Doom Emacs]] allows you to set the font you want to use using the variable `doom-font` in your config.el file. However, if you set this font to a non-monospaced font you will run into problems with formatted ASCI elements, like the splashscreen or tables, looking askew due to the variable font spacing.

Installing the `mixed-pitch` package will fix this problem. Emacs will use your `doom-variable-pitch-font` variable for most text, but for areas where a mono-spaced font is expected it will use the font set in `doom-font`.

You can install this by adding mixed-pitch to your packages.el file and adding this declaration to config.el: 

```
(use-package mixed-pitch
  :hook
  ;; If you want it in all text modes:
  (text-mode . mixed-pitch-mode))
```

