import { mount } from '@vue/test-utils'
import MenuItem from '@/components/menu_item'
import create from '../settings/utils'

describe('MenuItem', () => {
  let props, wrapper

  beforeAll(() => {
    props = {
      propsData: {
        item: create('menu_item')
      }
    }

    wrapper = mount(MenuItem, props)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  test.skip('Scroll', () => {
    wrapper.trigger('click')
    expect(wrapper.scroll).toBeTruthy() // ????
  })
})
