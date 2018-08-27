import { mount, shallowMount } from '@vue/test-utils'
import Header from '@/components/header'
import Menu from '@/components/menu'
import create from '../settings/utils'

describe('Header', () => {
  let props, wrapper

  beforeAll(() => {
    const images = {
      banner: {
        small: 'bar.jpg',
        medium: 'bar.jpg',
        large: 'bar.jpg',
        xlarge: 'bar.jpg',
      }
    }

    window.gon = {
      flag_links: create('menu_items'),
      menu_links: create('menu_items'),
      images: images
    }

    wrapper = mount(Header)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['flag_links', 'menu_links', 'images', 'bannerWidth', 'bannerHeight', 'windowWidth', 'windowHeight', 'i18n_css_class', 'main_css_class', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('Window', () => {
    it('is landscape', () => {
      wrapper.setData({
        windowWidth: 100,
        windowHeight: 90
      })
      expect(wrapper.vm.banner_image_class).toEqual('b-lazy banner-img bgwidth')
    })

    it('is portrait', () => {
      wrapper.setData({
        windowWidth: 90,
        windowHeight: 100
      })
      expect(wrapper.vm.banner_image_class).toEqual('b-lazy banner-img bgheight')
    })
  })

  it.skip('expand_menu', () => {
    wrapper.vm.expand_menu()
  })

  it.skip('destroy', () => {
    wrapper.destroy()
  })

  describe('Child components', () => {
    it('includes Menu', () => {
      const child_component = wrapper.find(Menu)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('renders 2 Menu objects', () => {
      wrapper = shallowMount(Header)
      const menus = wrapper.findAll(Menu)
      expect(menus.length).toBe(2)
    })
  })
})
