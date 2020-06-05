---
title: Troubleshooting Opengraph Images on Gatsby Using React Helmet
---

Had some trouble getting my [[OpenGraph]] images set up on this [[GatsbyJS]] site. They were working and all of a sudden just stopped working when I was updating other things on my site. Spent a good bit of time troubleshooting. The meta tags all showed up in the source but websites weren’t reading them.

## Solution

What ultimately solved the problem was including gatsby-plugin-react-helmet in the gatsby-config.js file of my website. I had it working at one point before without it, but adding that seemed to have solved my problem.

### Places to test your unfurled OpenGraph image

- https://cards-dev.twitter.com/validator
- https://unfurler.com
