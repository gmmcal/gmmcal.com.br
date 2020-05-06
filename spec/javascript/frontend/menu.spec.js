import Menu from '@/frontend/menu'
import handleScroll from '@/behavior/scroll-handle'
jest.mock('@/behavior/scroll-handle')

describe('Menu', () => {
  let callback, instance

  beforeEach(() => {
    document.body.innerHTML = '<a id="menu-a" class="nav-link"></a><a id="menu-b" class="nav-link"></a>'
    callback = jest.fn()
    instance = new Menu('.nav-link', callback)
    instance.watch()
  })

  it('works', () => {
    handleScroll.mockReturnValue('menu-a')
    instance.scroll()
    const selected = document.getElementById('menu-a')
    expect(selected.classList).toContain('active')
  })

  it('works', () => {
    handleScroll.mockReturnValue(undefined)
    instance.scroll()
    const selected = document.getElementById('menu-a')
    expect(selected.classList).not.toContain('active')
  })

  it('works', () => {
    const item = document.getElementById('menu-a')
    item.click()
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
