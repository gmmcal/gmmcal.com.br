const is_active = (scrollingElement, item) => {
  const el = document.getElementById(item.replace('menu-', ''))
  if (el === null) {
    return false
  }
  if (scrollingElement.scrollTop >= el.offsetTop - 60) {
    return true
  }
  return false
}

const find_active_items = items => {
  const scrollingElement = document.scrollingElement || document.documentElement
  return items.filter(item => is_active(scrollingElement, item))
}

const handleScroll = items => {
  const actives = find_active_items(items.reverse())
  return actives[0]
}

export default handleScroll
