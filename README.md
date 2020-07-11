# About this Website

The website currently has three different types of posts - articles, poems, and notes. The articles and poems are implemented with vanilla mdx; however, the notes are implemented using gatsby-theme-brain.

## 📝 Notes

This website uses gatsby-theme-brain to add a notes section. These notes use Bidirectional links and are aware when they are referenced by or on the same topic as other articles and poems across this website. 

## 📄 Pages

Make sure to import a layout if you're creating an .mdx page in src/pages

## 📁 Directory Structure

```
.
├── LICENSE
├── README.md
├── content
│   ├── assets
│   ├── notes <-- Note .mdx or .md files go here
│   ├── poems <-- Poem .mdx or .md files go here
│   │   └── seasons-of-thought
│   └── posts <-- Article .mdx or .md files go here
├── src
│   ├── @aengusm / gatsby-theme-brain
│   ├── components
│   │   ├── layout <-- General Layout
│   │   ├── notes <-- Modified layout for the notes
│   │   ├── poems <-- Modified layout for poems
│   │   ├── posts <-- Modified layout for articles
│   │   └── tags <-- information on generating tags
│   ├── gatsby-plugin-theme-ui <-- styles mostly go here
│   └── pages <-- Pages (often .mdx) go here
├── static <-- It might not be optimized but its sometimes easier to link to images stored here.
├── gatsby-config.js
├── gatsby-node.js
└── yarn.lock
```

## Bidirectional Links / Link Previews

Link Previews are implemented using Tippy JS Tooltips. gatsby-theme-brain provides native bidirectional linking and the information to easily implement link previews; however, in order to get this working across the site I added an MDX component that cycles through every single mdx page and puts the childMdx.body value inside of a tooltip if the slugs match.