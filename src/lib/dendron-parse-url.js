const slugify = require('slugify')
module.exports = (title) => {
  const segments = title.split('|')
  dendronTitle = segments.pop()
  return `/notes/${slugify(dendronTitle)}`
}
