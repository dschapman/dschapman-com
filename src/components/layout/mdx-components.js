import React from 'react'

import { isEmpty } from 'lodash'
import Tooltip from './tooltip'
import { Footnote, Marginnote } from './sidenote'
import { Figure } from './figure'
import Linktip from './linktip'
import { Callout, Blockquote } from './TextStyles'

import { InternalLink, InternalNotesLink, ExternalLink } from './links'

const INTERNAL_LINK_REGEX = /^\/notes/g
const INTERNAL_NON_NOTES_LINK_REGEX = /^\/(?!notes)/g
const AnchorTag = (props) => {
  const isInternalNotesLink = !isEmpty(props.href.match(INTERNAL_LINK_REGEX))
  const isInternalLink = !isEmpty(
    props.href.match(INTERNAL_NON_NOTES_LINK_REGEX)
  )
  let renderedLink = props.children

  if (isInternalNotesLink) {
    renderedLink = renderedLink.replace(/\[\[(.*?)\]\]/g, '$1')
    renderedLink = renderedLink.substring(
      renderedLink.lastIndexOf('|') + 1,
      renderedLink.length
    )
    return <u>{renderedLink}</u>
  } else if (isInternalLink) {
    return <u>{renderedLink}</u>
  } else {
    return <u>{renderedLink}</u>
  }
}

export default {
  a: AnchorTag,
  blockquote: Blockquote,
  img: (props) => <Figure {...props} />,
  Footnote: (props) => <Footnote {...props} />,
  Tooltip: (props) => <Tooltip {...props} />,
  Linktip: (props) => <Linktip {...props} />,
  Callout: (props) => <Callout {...props} />,
  Marginnote: (props) => <Marginnote {...props} />,
  Figure: (props) => <Figure {...props} />,
}
