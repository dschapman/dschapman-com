---
slug: '/articles/how-i-coded-this-website'
date: '2020-02-07'
excerpt: 'A little bit about how I coded this website with GatsbyJS.'
title: 'How I Coded This Website'
tags: ['gatsby', 'resource-list', 'website']
---

Fun Fact: I coded this website myself. The source code for everything you see lives on my computer<Marginnote count={1}>[You can also browse it on Github](https://github.com/dschapman/PersonalBlog)</Marginnote>.

There are many reasons I enjoy coding — problem solving, creativity, learning new technologies and new systems. I also love coding because its a bit like magic. Lines of code are the incantation, symbols have to be arranged just so or else the magic fizzles.

The problem is that a website is not an easy spell, at least for this dabbler in the art. There are multiple files that work together to accomplish different things. Some of the files define what my [about page](/about) looks like, while others work to convert ordinary text files<Marginnote count={2}>My website content is kept in [markdown](https://en.wikipedia.org/wiki/Markdown) files.</Marginnote> into web pages like the one you’re reading now. There are multiple languages at work - in my case Javascript (React), HTML, CSS, and GraphQL.

Luckily, I don’t have to reinvent the wheel (or the spell book). Other mages have travelled this way before and left their notes and tools behind which I have used as I’ve coded my site. The largest tool has been [Gatsby](https://www.gatsbyjs.org).

## What is Gatsby?

Gatsby is a static site generator which means that static files are generated when I build my site and then these light-weight pages are served to your browser whenever you visit my website.

What this means practically is that I can design and code my website using Javascript. I can tell Javascript what I want it to do with my content programmatically. Then instead of recreating that for each page of my website, I can just tell it to take content (like [the markdown file](https://github.com/dschapman/my-website/blob/master/content/posts/how-i-coded-this-website.md) containing this article) and turn it into a page on my website complete with the appropriate tags, links to similar content, dynamic share image, and updates to my [front page](/) — all by adding a single file to a folder.

For me this means that its super easy to write something on my website. I just create a markdown file, write my piece, and then push that file to [my repository on Github](https://github.com/dschapman/PersonalBlog). I can also easily add on to an article I previously wrote _like this one_.

## Resources for Building Your Own Website

I have always enjoyed computers and had a high level understanding of programming before I built my website. But if you don’t have much of a technical background, these are some of the resources I’d recommend to get started learning how to code your website:

- [MDN web docs — Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML): HTML is the backbone of any website and I consult the Mozilla web docs whenever I have a question about HTML or CSS
- [MDN web docs — Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS): CSS is how you make HTML look pretty. The Mozilla Web docs are great.
- [MDN web docs - Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript): I actually didn’t use MDN to learn Javascript, but including it here for completeness. As long as you’re familiar with high level programming concepts and willing to learn as you go you can try skipping to the next item on the list.
- [Build a Blog with React and Markdown — Egghead.io](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby): Egghead.io is a great source for video learning content on web technologies. They are aimed at tech professionals so there’s some assumed knowledge, but I found this video series easy to follow and by the end you will have a blog of your own built on Gatsby.
- [Gatsby.js Tutorials ](https://www.gatsbyjs.org/tutorial/): Once you’ve followed the egghead video (or maybe simultaneously) you can also check out the Gatsby documentation.
- [Gatsby.js Plugin Library](https://www.gatsbyjs.org/plugins/): Once your site is up and running, try adding plugins to add more features. If it doesn’t work figure out why or try something else.
- [Gatsby Theme Blog](https://www.gatsbyjs.com/plugins/gatsby-theme-blog/): Gatsby Themes are a great way to get a Gatsby site going without too much coding. If you just want a blog, this one is a great place to start.

### More Advanced Resources

- [Building an OpenGraph Image Generation API](https://egghead.io/playlists/building-an-opengraph-image-generation-api-with-cloudinary-netlify-functions-and-react-914e): I used this video collection on egghead.io (along with copying code from [Ian Jones](https://twitter.com/_jonesian)) to create a system that automatically generates the images that appear when you share my website via twitter or services like imessage. [You can see my implementation of this on Github](https://github.com/dschapman/egghead-opengraph-images).
