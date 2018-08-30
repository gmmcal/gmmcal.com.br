import { mount, shallowMount } from '@vue/test-utils'
import Markdown from '@/components/Markdown'

describe('Markdown', () => {
  let slots, wrapper

  beforeAll(() => {
    wrapper = mount(Markdown, slots)
  })

  describe('with text', () => {
    it('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('with children', () => {
    beforeAll(() => {
      slots = {
        slots: {
          default: '<p>Some text</p>'
        }
      }

      wrapper = mount(Markdown, slots)
    })

    it('is a Vue instance', () => {
      expect(wrapper.isVueInstance()).toBeTruthy()
    })

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })
})
