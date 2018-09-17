import { mount, shallowMount } from '@vue/test-utils'
import Banner from '@/components/banner'
import Menu from '@/components/menu'
import MenuContainer from '@/components/menu-container'
import create from '../settings/utils'

describe('Banner', () => {
  let wrapper

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
      images: images
    }

    wrapper = mount(Banner)
  })

  afterAll(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['images', 'bannerWidth', 'bannerHeight', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('Window', () => {
    it('is landscape', () => {
      wrapper.setData({
        bannerWidth: 100,
        bannerHeight: 90
      })
      expect(wrapper.vm.banner_image_class).toEqual('b-lazy banner-img bgwidth')
    })

    it('is portrait', () => {
      wrapper.setData({
        bannerWidth: 90,
        bannerHeight: 100
      })
      expect(wrapper.vm.banner_image_class).toEqual('b-lazy banner-img bgheight')
    })
  })
})
