---
title: 'Responsive Elements in Theme UI'
---

In [[Theme UI]] breakpoints are implemented on a key by key basis using an array. For instance if you wanted to change the color of text depending on the size of the window you would include `color: ['blue','red','green']` in the styling (either sx or in the index.js of Theme UI) and the text would be blue at the smallest breakpoint, red at the next one, and green at the largest.
