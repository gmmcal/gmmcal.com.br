import handleMenu from 'behavior/menu-handle'

const handleClick = event => {
  const destination = event.target.hash

  if (document.location.pathname === '/' && destination.indexOf('#') >= 0 ) {
    event.preventDefault()

    const title = event.target.attributes['alt']
    const el = document.querySelector(destination)

    if (el !== null) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

      handleMenu()

      window.history.pushState(destination, title, destination)
    }
  }
}

export default handleClick
