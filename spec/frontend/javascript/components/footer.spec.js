import { mount } from '@vue/test-utils'
import Footer from '@/components/footer'
import Social from '@/components/social'

describe('Footer', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Footer)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = []
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('has footer class', () => {
    expect(wrapper.classes()).toContain('footer')
  })

  describe('Child components', () => {
    it('includes Social', () => {
      const child_component = wrapper.find(Social)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
