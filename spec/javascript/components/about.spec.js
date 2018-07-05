import { mount } from '@vue/test-utils'
import VueMarkdown from 'vue-markdown'
import About from '@/components/about'
import create from '../settings/utils'

describe('About', () => {
  let props, wrapper

  beforeAll(() => {
    window.gon = { about: create('about') }

    props = {
      propsData: {
        image: 'bar.jpg'
      }
    }

    wrapper = mount(About, props)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['about', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Contains', () => {
    test('page title', () => {
      const el = wrapper.find('h2')
      expect(el.text()).toBe('About Me')
    })

    test('user name', () => {
      const el = wrapper.find('h3')
      expect(el.text()).toBe('Gustavo Cunha')
    })

    test('job title', () => {
      const el = wrapper.find('.sub-heading')
      expect(el.text()).toBe('Some title at some company')
    })

    test('user image', () => {
      expect(wrapper.contains('img[src="bar.jpg"]')).toBe(true)
    })

    test('CV link', () => {
      expect(wrapper.contains('a[href="file.pdf"]')).toBe(true)
    })
  })

  describe('Child components', () => {
    test('VueMarkdown', () => {
      const child_component = wrapper.find(VueMarkdown)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
