import { mount } from '@vue/test-utils'
import VueMarkdown from '@/components/markdown'
import Experience from '@/components/experience'
import create from '../settings/utils'

describe('Experience', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      propsData: {
        experience: create('experience')
      }
    }

    wrapper = mount(Experience, props)
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
    it('has dates', () => {
      const el = wrapper.find('.year')
      expect(el.text()).toBe('Jan / 2015Jan / 2016')
    })

    describe('Contains company details', () => {
      it('with company name', () => {
        const el = wrapper.findAll('h4 span').at(0)
        expect(el.text()).toBe('Amazing company')
      })

      it('with city', () => {
        const el = wrapper.findAll('h4 span').at(2)
        expect(el.text()).toBe('Great city')
      })

      it('with country', () => {
        const el = wrapper.findAll('h4 span').at(3)
        expect(el.text()).toBe('Some country')
      })
    })

    it('has a course', () => {
      const el = wrapper.find('h5')
      expect(el.text()).toBe('Ninja developer')
    })

    it('has a description', () => {
      const el = wrapper.find('.description')
      expect(el.text()).toBe('Lorem ipsum nulus dolor')
    })

    describe('without end date', () => {
      beforeEach(() => {
        props = {
          propsData: {
            experience: create('experience', { end_date: null })
          }
        }

        wrapper = mount(Experience, props)
      })

      it('has Currently text', () => {
        const el = wrapper.find('.year')
        expect(el.text()).toBe('Jan / 2015Currently')
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
