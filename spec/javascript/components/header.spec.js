import { mount, shallowMount } from '@vue/test-utils'
import Header from '@/components/header'
import Menu from '@/components/menu'
import MenuContainer from '@/components/menu-container'
import Banner from '@/components/banner'
import create from '../settings/utils'

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    window.gon = {
      flag_links: create('menu_items'),
      menu_links: create('menu_items')
    }

    wrapper = mount(Header)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['flag_links', 'i18n_css_class']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('Child components', () => {
    it('includes Menu', () => {
      const child_component = wrapper.find(Menu)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('includes MenuContainer', () => {
      const child_component = wrapper.find(MenuContainer)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('includes Banner', () => {
      const child_component = wrapper.find(Banner)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('renders 1 Menu object', () => {
      wrapper = shallowMount(Header)
      const menus = wrapper.findAll(Menu)
      expect(menus.length).toBe(1)
    })

    it('renders 1 Menu Container object', () => {
      wrapper = shallowMount(Header)
      const menus = wrapper.findAll(MenuContainer)
      expect(menus.length).toBe(1)
    })

    it('renders 1 Banner object', () => {
      wrapper = shallowMount(Header)
      const menus = wrapper.findAll(Banner)
      expect(menus.length).toBe(1)
    })
  })
})
