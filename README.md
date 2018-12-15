## Adding Content
Content is added via markdown files (mdx is supported). Pages are created based on the folder name in the [/src/pages/](../master/src/pages/) directory.

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
