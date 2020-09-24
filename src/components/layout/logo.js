import React from 'react'
import { Link } from 'gatsby'

// npm install --save-dev @iconify/react @iconify/icons-mdi
import { Icon, InlineIcon } from '@iconify/react'
import sproutIcon from '@iconify/icons-mdi/sprout'

export default () => (
  <Link to="/">
    <Icon icon={sproutIcon} color="#75B9BE" height="1.5rem" />
  </Link>
)
