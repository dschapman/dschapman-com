const slugify = require('slugify')
module.exports = (title) => {
  const segments = title.split('|')
  obsidianTitle = segments.shift()
  return `/notes/${slugify(obsidianTitle)}`
}
