import { mount } from '@vue/test-utils'
import VueMarkdown from 'vue-markdown'
import Education from '@/components/education'
import create from '../settings/utils'

describe('Education', () => {
  let props, wrapper

  beforeAll(() => {
    props = {
      propsData: {
        education: create('education')
      }
    }

    wrapper = mount(Education, props)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Content', () => {
    test('Contains end date', () => {
      const el = wrapper.find('.year')
      expect(el.text()).toBe('Jan / 2016')
    })

    test('Contains institution', () => {
      const el = wrapper.find('h4')
      expect(el.text()).toBe('Some awesome university')
    })

    test('Contains course', () => {
      const el = wrapper.find('h5')
      expect(el.text()).toBe('Computer science')
    })

    test('Contains description', () => {
      const el = wrapper.find('.description')
      expect(el.text()).toBe('Lorem ipsum nulus dolor')
    })

    describe('without end date', () => {
      const props = {
        propsData: {
          education: create('education', { end_date: null })
        }
      }

      const wrapper = mount(Education, props)

      test('Contains currently text', () => {
        const el = wrapper.find('.year')
        expect(el.text()).toBe('Currently')
      })
    })
  })

  describe('Child components', () => {
    test('VueMarkdown', () => {
      const child_component = wrapper.find(VueMarkdown)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
