import { mount } from '@vue/test-utils'
import Error from '@/components/error'
import create from '../settings/utils'

describe('Error', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      propsData: {
        leading: 'Leading',
        content: 'Content'
      }
    }

    wrapper = mount(Error, props)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  describe('Content', () => {
    it('has a leading text', () => {
      const el = wrapper.find('h1')
      expect(el.text()).toBe('Leading')
    })

    it('has a content text', () => {
      const el = wrapper.find('p')
      expect(el.text()).toBe('Content')
    })
  })
})
