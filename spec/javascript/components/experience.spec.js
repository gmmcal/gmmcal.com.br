import { mount } from '@vue/test-utils'
import VueMarkdown from 'vue-markdown'
import Experience from '@/components/experience'
import create from '../settings/utils'

describe('Experience', () => {
  let props, wrapper

  beforeAll(() => {
    props = {
      propsData: {
        experience: create('experience')
      }
    }

    wrapper = mount(Experience, props)
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
    test('Contains dates', () => {
      const el = wrapper.find('.year')
      expect(el.text()).toBe('Jan / 2015Jan / 2016')
    })

    describe('Contains company details', () => {
      test('Company name', () => {
        const el = wrapper.findAll('h4 span').at(0)
        expect(el.text()).toBe('Amazing company')
      })

      test('City', () => {
        const el = wrapper.findAll('h4 span').at(2)
        expect(el.text()).toBe('Great city')
      })

      test('Country', () => {
        const el = wrapper.findAll('h4 span').at(3)
        expect(el.text()).toBe('Some country')
      })
    })

    test('Contains course', () => {
      const el = wrapper.find('h5')
      expect(el.text()).toBe('Ninja developer')
    })

    test('Contains description', () => {
      const el = wrapper.find('.description')
      expect(el.text()).toBe('Lorem ipsum nulus dolor')
    })

    describe('without end date', () => {
      beforeAll(() => {
        props = {
          propsData: {
            experience: create('experience', { end_date: null })
          }
        }

        wrapper = mount(Experience, props)
      })

      test('Contains currently text', () => {
        const el = wrapper.find('.year')
        expect(el.text()).toBe('Jan / 2015Currently')
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
