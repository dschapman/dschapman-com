# About this Website

The website currently has three different types of posts - articles, poems, and notes. The articles and poems are implemented with gatsby-plugin-mdx and I curate links on /articles and /poetry respectively; however, the notes are implemented using gatsby-theme-brain.

## 📝 Notes

This website uses gatsby-theme-brain to add a notes section. These notes use Bidirectional links and are aware when they are referenced by other notes or and when they are on the same topic as other articles and poems across this website. 

## 📘 Articles

Implemented in gatsby-plugin-mdx. The slug is drawn from slug in the frontmatter, title, and excerpt are also important values. A list of all tags used in articles can be viewed at /articles/tags. These tags will also list links to a note page with the same name as the tag if present. 

## 📜 Poems

Like Articles, all the poems on the site can be seen at /poetry/all. Much of the frontmatter for articles and poems are the same, the exception is the `recording` element which takes the location of an MP3 file and will generate a player at the top of the poem if one exists. Poems have the same tagging system as Articles.

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

## ↔️ Bidirectional Links / Link Previews

Link Previews are implemented using Tippy JS Tooltips. gatsby-theme-brain provides native bidirectional linking and the information to easily implement link previews (with a slightly modified GraphQL query); however, in order to get this working across the site I added an MDX component that cycles through every single mdx page and puts the childMdx.body value inside of a tooltip if the slugs match.
