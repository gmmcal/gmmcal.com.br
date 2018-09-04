import { mount } from '@vue/test-utils'
import VueMarkdown from '@/components/markdown'
import About from '@/components/about'
import create from '../settings/utils'

describe('About', () => {
  let wrapper

  beforeAll(() => {
    const images = {
      user: {
        small: 'bar.jpg',
        medium: 'bar.jpg',
        large: 'bar.jpg',
        xlarge: 'bar.jpg',
      }
    }

    window.gon = {
      about: create('about'),
      images: images
    }

    wrapper = mount(About)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['about', 'images', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('Content', () => {
    it('has a page title', () => {
      const el = wrapper.find('h2')
      expect(el.text()).toBe('About Me')
    })

    it('has an user name', () => {
      const el = wrapper.find('h3')
      expect(el.text()).toBe('Gustavo Cunha')
    })

    it('has a job title', () => {
      const el = wrapper.find('.sub-heading')
      expect(el.text()).toBe('Some title at some company')
    })

    it('has an user image', () => {
      expect(wrapper.contains('img.b-lazy[data-src="bar.jpg"]')).toBe(true)
    })

    it('has a CV link', () => {
      expect(wrapper.contains('a[href="file.pdf"]')).toBe(true)
    })
  })

  describe('Child components', () => {
    it('includes VueMarkdown', () => {
      const child_component = wrapper.find(VueMarkdown)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
