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
    test('is landscape', () => {
      wrapper.setData({
        windowWidth: 100,
        windowHeight: 90
      })
      expect(wrapper.vm.banner_image_class).toEqual('banner-img bgwidth')
    })

    test('is portrait', () => {
      wrapper.setData({
        windowWidth: 90,
        windowHeight: 100
      })
      expect(wrapper.vm.banner_image_class).toEqual('banner-img bgheight')
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
