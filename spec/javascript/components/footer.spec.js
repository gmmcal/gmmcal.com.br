import { mount, shallowMount } from '@vue/test-utils'
import Footer from '@/components/footer'
import Social from '@/components/social'

describe('Footer', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(Footer)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = []
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  test('Has footer class', () => {
    expect(wrapper.classes()).toContain('footer')
  })

  describe('Child components', () => {
    test('Social', () => {
      const child_component = wrapper.find(Social)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
