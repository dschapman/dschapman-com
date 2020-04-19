---
slug: '/articles/how-i-coded-this-website'
date: '2020-02-07'
excerpt: 'A little bit about how I coded this website with GatsbyJS.'
title: 'How I Coded This Website'
tags: ['gatsby', 'tech', 'resource list']

type: 'guide'
published: true
image: '/articles/how-i-coded-this-website/gatsby-website-js.jpg'
---

Fun Fact: I coded this website myself. The source code for everything you see lives on my computer [(you can also browse it on Github)](https://github.com/dschapman/PersonalBlog) .

There are many reasons I enjoy coding — problem solving, creativity, learning new technologies and new systems. I also love coding because its a bit like magic. Lines of code are the incantation, symbols arranged just so or else the magic fizzles.

The problem is that a website is no easy spell, at least for this dabbler in code. There are multiple files that work to accomplish different things. Some of the files define what my (about page)[/about/] looks like others work to convert markdown files into web pages like the one you’re reading now. There are multiple languages at work - javascript, HTML, CSS, and GraphQL.

Luckily, I don’t have to reinvent the wheel (or the spell book). Other mages have travelled this way before and left their notes and tools behind which I have used as I’ve coded my site. The most helpful has been [Gatsby](https://www.gatsbyjs.org).

## What is Gatsby?

Gatsby is a static site generator which means that instead of generating pages when they are requested, static files are generated when I build my site and then these light-weight pages are served to your browser whenever you visit my website.

What this means practically is that I can design and code my website using javascript. Telling it what I want it to do with my content programmatically. Then instead of recreating that for each page of my website I can just tell it to take content (like a markdown file containing this article) and turn it into a page on my website complete with the appropriate tags, links to similar content, and updates to my [front page](/) — all by adding a single file to a folder.

For me this means that its super easy to write something on my website. I just create a markdown file and then push that file to [my repository on Github](https://github.com/dschapman/PersonalBlog). I can also add on to an article I previously wrote _like this one_ and add information as I go.

## Resources for Building Your Own Website

I have always enjoyed computers and had a broad understanding of programming (I took 4 classes in college) before I built my website. But if you don’t have much of a technical background, but are interested in learning to code your own website these are some of the resources I’d recommend:

- [MDN web docs — Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML): HTML is the backbone of any website and I consult the Mozilla web docs whenever I have a question about HTML or CSS
- [MDN web docs — Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS): CSS is how you make HTML look pretty. The Mozilla Web docs are great.
- [MDN web docs - Javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript): I actually didn’t use MDN to learn Javascript, but including it here for completeness. As long as you’re familiar with high level programming concepts and willing to learn as you go you can try skipping to the next item on the list.
- [Build a Blog with React and Markdown — Egghead.io](https://egghead.io/courses/build-a-blog-with-react-and-markdown-using-gatsby): Egghead.io is a great source for video learning content on web technologies. They are aimed at tech professionals so there’s some assumed knowledge, but I found this video series easy to follow and by the end you will have a blog of your own built on Gatsby.
- [Gatsby.js Tutorials ](https://www.gatsbyjs.org/tutorial/): Once you’ve followed the egghead video (or maybe simultaneously) you can also check out the Gatsby documentation.
- [Gatsby.js Plugin Library](https://www.gatsbyjs.org/plugins/): Once your site is up and running, try adding plugins to add more features. If it doesn’t work figure out why or try something else.
- [Gatsby Theme Austere](https://github.com/johno/gatsby-theme-austere): I recently rewrote my blog to use [Gatsby Themes](https://www.gatsbyjs.org/docs/themes/what-are-gatsby-themes/). This theme by [John Otander](https://johno.com) is cool and is what my site is now based on.
