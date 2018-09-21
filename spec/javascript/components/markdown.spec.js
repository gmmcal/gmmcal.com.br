import { mount } from '@vue/test-utils'
import Markdown from '@/components/markdown'

describe('Markdown', () => {
  let slots, wrapper

  beforeEach(() => {
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
    beforeEach(() => {
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
