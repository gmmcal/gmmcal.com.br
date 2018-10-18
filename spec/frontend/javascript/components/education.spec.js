import { mount } from '@vue/test-utils'
import VueMarkdown from '@/components/markdown'
import Education from '@/components/education'
import create from '../settings/utils'

describe('Education', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      propsData: {
        education: create('education')
      }
    }

    wrapper = mount(Education, props)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('Content', () => {
    it('has an end date', () => {
      const el = wrapper.find('.year')
      expect(el.text()).toBe('Jan / 2016')
    })

    it('has an institution', () => {
      const el = wrapper.find('h4')
      expect(el.text()).toBe('Some awesome university')
    })

    it('has a course', () => {
      const el = wrapper.find('h5')
      expect(el.text()).toBe('Computer science')
    })

    it('has a description', () => {
      const el = wrapper.find('.description')
      expect(el.text()).toBe('Lorem ipsum nulus dolor')
    })

    describe('without end date', () => {
      beforeEach(() => {
        props = {
          propsData: {
            education: create('education', { end_date: null })
          }
        }

        wrapper = mount(Education, props)
      })

      it('has Currently text', () => {
        const el = wrapper.find('.year')
        expect(el.text()).toBe('Currently')
      })
    })
  })

  describe('Child components', () => {
    it('includes VueMarkdown', () => {
      const child_component = wrapper.find(VueMarkdown)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
