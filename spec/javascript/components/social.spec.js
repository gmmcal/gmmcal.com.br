import { mount } from '@vue/test-utils'
import Social from '@/components/social'

describe('Social', () => {
  let wrapper

  beforeAll(() => {
    wrapper = mount(Social)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = []
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })
})
