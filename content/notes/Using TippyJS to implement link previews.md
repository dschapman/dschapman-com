---
title: Using TippyJS to implement link previews
---

On May 16 I implemented link previews on the [[notes]] section of my [[website]]. Hopefully you can see what I mean just by hovering over those links. I did this using [[Tippy]] and modifying the query on the [[gatsby-theme-brain]] I use for my notes.

In addition to regular mdx data `gatsby-theme-brain` allows you to query the **InboundReferenceNotes** - the notes that reference this note - and the **OutboundReferenceNotes** - the notes that this note references. This means that in order to get link previews working I just made sure that I queried the childMdx property for both Inbound and Outbound Notes and grabbed the body property from childMdx which contains Markdown that is ready to be rendered with an MDXRenderer. Then I had to pass all of the OutboundReferenceNote information - slug, title, and body - to the MDXcomponent I used to parse my links.

In my note-mdx-components.js file I added logic that checks each link and for any link to an OutboundReferenceNote, it substitutes the regular link with a Tippy tooltip that has as an MDXRenderer wrapped around the markdown body as its tooltip.

The tricky thing is that you can get into an infinite loop of tooltips in densely linked notes. What I ended up doing to get around this is using a different MdxComponent provider for the tooltips then for the rest of my notes. This makes sure that my tooltips don’t go on to generate more tooltips.

## Credit

- I looked at [[Ian Jones]]’s notes site and [[Aravind Balla]]’s notes site for some inspiration on how to pass more information. Aravind Balla’s notes site was particularly helpful since he was [passing additional values along with the link](https://github.com/dschapman/my-website/blob/bffe1f13295fcd07f9e48b64a082145ecbda80ca/src/%40aengusm/gatsby-theme-brain/components/BrainNote.js#L142) through the mdx components. This concept was key for my implementation.
- I borrowed my Tooltip setup from [[Maggie Appleton]]’s website.
