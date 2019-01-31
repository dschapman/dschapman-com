## Adding Markdown Content
Most content is added via markdown files (mdx is supported). Pages are created based on the folder name in the [/src/pages/](../master/src/pages/) directory.

Frontmatter is important in determining where the post ends up on the site. Here are some important frontmatter values:

  * path: The url of the post
  * date: The date the post was published
  * description: The meta description of the post. Used for SEO
  * image: The image used for the social media card image. Place the image in the static folder.
  * title: The title of the post. Used for SEO and as the title of the post.
  * tags: Tags to categorize the post
  * type: Currently there are two types of posts - guide and blog. This determines how posts are sorted
  * published: A boolean value that determines whether links are found to the post on the site.
  * Excerpt: A short excerpt of the post. Used on the frontpage.

## Using Tailwind
There are two options for implementing tailwind styled components on this site.
1. Using styled components from react emotion. 
```javascript
import styled from 'react-emotion'

const Button = styled.button(
  tw`bg-white text-blue`
)
```
Any tailwind styling will go within the \`\` following the tw variable.

2. If the changes are specific to just one instance you can use the css className from react emotion.
```javascript
import {css} from 'react-emotion'

<h2 className={css(tw`text-center text-blue-dark`)}>Tailwind Heading</h2>
```
Any tailwind styling will go within the \`\` following the tw variable.

If you have any questions regarding styling with tailwinds consult [the documentation](https://tailwindcss.com/docs/what-is-tailwind/)
