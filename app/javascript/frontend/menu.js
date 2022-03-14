import { handleScroll } from '../behavior'

class Menu {
  _items = []
  _selector = null
  _callback = null
  _activeClass = 'active'

  constructor(selector, callback) {
    this.selector = selector
    this.callback = callback
    this.items = [].slice.call(document.querySelectorAll(this.selector))
    this.events()
  }

  set items(items) {
    this._items = items
  }

  set selector(selector) {
    this._selector = selector
  }

  set callback(callback) {
    this._callback = callback
  }

  get items() {
    return this._items
  }

  get selector() {
    return this._selector
  }

  get callback() {
    return this._callback
  }

  get activeClass() {
    return this._activeClass
  }

  get ids() {
    return this.items.map(item => item.id)
  }

  scroll() {
    const selected = handleScroll(this.ids)
    if (selected !== undefined) {
      this.items.forEach(element => {
        element.classList.remove(this.activeClass)
      })
      document.getElementById(selected).classList.add(this.activeClass)
    }
  }

  watch() {
    this.items.forEach(element => {
      element.onclick = this.callback
    })
  }

  events() {
    window.addEventListener('scroll', this.scroll.bind(this))
    window.addEventListener('resize', this.scroll.bind(this))
  }
}

export default Menu
