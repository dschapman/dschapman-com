---
title: 'How I write these notes'
slug: 'how-i-write-these-notes'
---

I write most of my [[notes]] currently using [Bear](bear.app). The good thing about this is that it can export to markdown. The difficult thing is that it makes it difficult to keep a single source of truth. Do I edit in my GitHub repository? If I do then my bear is out of date and I can no longer easily edit on my phone.

I’ve decided to continue using [[bear]] as my editor. Any changes I want to make to my notes I make in here and then I export the markdown file to the `./content/notes` folder on my repository and push to GitHub. The problem I discovered is that when notes are exported from bear to `gatsby-theme-brain` the title appears twice - first from the title that the theme generates and then again from the markdown character `#` . In order to get around this [I wrote a python script](https://github.com/dschapman/my-website/blob/master/parse-md.py) that moves the title at the top of the exported bear note into a front matter block at the top of the notes.

In the case of this note the title of the bear note is currently:

```
# How I write these notes
```

after executing the script it becomes

```
---
title: “How I write these notes”
---
```

so currently the plan is to edit in bear, export to the website repository, then run the script to standardize the title.

I am interested in further optimizing this, potentially using something like an Alfred workflow or a modified version of [this export script](https://github.com/andymatuschak/Bear-Markdown-Export) but for now this flow seems to work.
