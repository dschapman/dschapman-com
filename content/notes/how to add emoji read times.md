---
title: How to add emoji read times
roam_alias: ['Add emoji read times']
aliases: ['Add emoji read times']
---

Decided to add emoji read times to my [articles](/articles) on my [[website]]. To do this I first had to [remove gatsby-theme-blog-core](https://github.com/dschapman/my-website/commit/60add3f79cbd9cdf066ca526fe52755f1420c8a2) from my website because the theme doesn't have the ability to query other [[mdx]] properties like timeToRead or wordCount which I'll be using to determine which emojis to use.

After that it was an easy matter of just querying wordCount, defining an emoji variable, and assigning a different emoji/number of emjois depending on the length of the variable. I added a [[Tippy]] tooltip that displays the wordcount when you hover over the emoji so that its clear what the emoji means.

