// FIXME: refactor this
const scrolled_items = items => {
  const scrollingElement = document.scrollingElement || document.documentElement
  return items.filter((item) => {
    const el = document.getElementById(item.label)
    if (el === null) {
      return false
    }
    if (scrollingElement.scrollTop >= el.offsetTop - 60) {
      return true
    }
    return false
  })
}

const handleScroll = items => {
  const menu_items = items.slice().reverse()
  const actives = scrolled_items(menu_items)
  if (actives.length === 0)
    return items[0]
  return actives[0].label
}

export default handleScroll
