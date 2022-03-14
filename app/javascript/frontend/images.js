class Images {
  _selector = '.lazy'
  _activeClass = 'visible'

  constructor() {
    this.images.forEach(image => this.load(image))
  }

  get selector() {
    return this._selector
  }

  get activeClass() {
    return this._activeClass
  }

  get images() {
    return document.querySelectorAll(this.selector)
  }

  load(image) {
    image.classList.add(this.activeClass)
  }
}

export default Images
