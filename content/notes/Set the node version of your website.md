---
title: 'Set the node version of your website'
---

I ran into an issue where Netlify was using an old version of node to build my [[website]]. A [[Gatsby]] plugin I use requires version 12 and above of node, but Netlify was using version 10. In order to fix this I created a file called `.node-version` with the text 13 to indicate that Netlify should use version 13 of node.
