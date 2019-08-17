import { mount, shallowMount } from '@vue/test-utils'
import MenuContainer from '@/components/menu-container'
import Menu from '@/components/menu'
import create from '../settings/utils'

describe('MenuContainer', () => {
  let wrapper

  beforeEach(() => {
    window.gon = {
      menu_links: create('menu_items')
    }

    wrapper = mount(MenuContainer)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['links', 'click']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Child components', () => {
    it('includes Menu', () => {
      const child_component = wrapper.find(Menu)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('renders 1 Menu objects', () => {
      const props = {
        propsData: {
          items: gon.menu_links
        }
      }
      wrapper = shallowMount(Menu, props)
      const menus = wrapper.findAll(Menu)
      expect(menus.length).toBe(1)
    })
  })
})
