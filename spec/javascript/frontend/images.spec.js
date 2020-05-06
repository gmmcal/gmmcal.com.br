import Images from '@/frontend/images'

describe('Images', () => {
  let instance

  beforeEach(() => {
    document.body.innerHTML =
      '<img src="#" class="lazy">' +
      '<img src="#" class="lazy">' +
      '<img src="#" class="notlazy">'
    instance = new Images()
  })

  it('works', () => {
    expect(instance.images.length).toEqual(2)
  })

  it('works', () => {
    const images = document.getElementsByTagName('img')
    expect(images[0].classList).toContain('visible')
    expect(images[1].classList).toContain('visible')
    expect(images[2].classList).not.toContain('visible')
  })

  it('works', () => {
    expect(instance.selector).toEqual('.lazy')
  })

  it('works', () => {
    expect(instance.activeClass).toEqual('visible')
  })
})
