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
    if (renderedLink.includes('|')) {
      renderedLink = renderedLink.substring(0, renderedLink.lastIndexOf('|'))
    }
    return <InternalNotesLink to={props.href}>{renderedLink}</InternalNotesLink>
  } else if (isInternalLink) {
    return <InternalLink to={props.href}>{renderedLink}</InternalLink>
  } else {
    return <ExternalLink {...props}>{renderedLink}</ExternalLink>
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
