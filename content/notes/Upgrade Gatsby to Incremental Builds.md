---
title: Upgrade Gatsby to Incremental Builds
---

On May 13, 2020 I upgraded my [[GatsbyJS]] to Incremental Builds using this guide: [Enable Gatsby Incremental Builds on Netlify](https://www.netlify.com/blog/2020/04/23/enable-gatsby-incremental-builds-on-netlify/)

My biggest problem was figuring out how to Enable Netlify Build Plugins.

When I went to select from the dropdown, nothing was visible. **The problem was that my build image was set to Ubuntu Trusty 14.04,** probably due to when I first setup my gatsby site, **but in order to enable Netlify Build Plugins you have to be on Ubuntu Xenial 16.04**. Once I switched the build image I was able to proceed with the guide without any issues.
