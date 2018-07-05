import { mount, shallowMount } from '@vue/test-utils'
import Header from '@/components/header'
import Menu from '@/components/menu'
import create from '../settings/utils'

describe('Header', () => {
  let props, wrapper

  beforeAll(() => {
    window.gon = {
      flag_links: create('menu_items'),
      menu_links: create('menu_items'),
    }

    props = {
      propsData: {
        image: 'bar.jpg'
      }
    }

    wrapper = mount(Header, props)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['flag_links', 'menu_links', 'bannerWidth', 'bannerHeight', 'windowWidth', 'windowHeight', 'i18n_css_class', 'main_css_class', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Window', () => {
    test.skip('is landscape', () => {
    })

    test.skip('is portrait', () => {
    })
  })

  describe('Child components', () => {
    test('Menu', () => {
      const child_component = wrapper.find(Menu)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Renders 2 Menu objects', () => {
      wrapper = shallowMount(Header)
      const menus = wrapper.findAll(Menu)
      expect(menus.length).toBe(2)
    })
  })
})
