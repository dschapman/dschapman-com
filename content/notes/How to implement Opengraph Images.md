---
title: How to implement Opengraph Images
---

These are the resources I used to implement [[Opengraph]] Images on this website. The most useful resource I used was an [[egghead]] collection by [[Chris Biscardi]]: 

- Generate images [Collection - Building an OpenGraph image generation API with Cloudinary, Netlify Functions, and React on @eggheadio](https://egghead.io/playlists/building-an-opengraph-image-generation-api-with-cloudinary-netlify-functions-and-react-914e)
- https://twitter.com/jhooks/status/1246948896040865793
- [GitHub - theianjones/egghead-opengraph-images](https://github.com/theianjones/egghead-opengraph-images)

Essentially this course/these resources allow you to create Netlify serverless functions that will dynamically generate opengraph images using a template. Here's the template I built for the course in CodeSandbox:

https://codesandbox.io/s/happy-mendel-uiesy?file=/src/App.js

This then is sent to cloudinary and cached there so that it doesn't have to be regenerated every time the image is requested.

The end product means that I don't need to do extra work to find images I like for every note or post that I do.

You can browse the code that generates my Opengraph Images on Github

- [GitHub - dschapman/egghead-opengraph-images](https://github.com/dschapman/egghead-opengraph-images)
