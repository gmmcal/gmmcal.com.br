import { mount } from '@vue/test-utils'
import Menu from '@/components/menu'
import MenuItem from '@/components/menu_item'
import create from '../settings/utils'

describe('Menu', () => {
  let props, wrapper

  beforeAll(() => {
    props = {
      propsData: {
        items: create('menu_items')
      }
    }

    wrapper = mount(Menu, props)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['active']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  test.skip('Scroll', () => {
  })

  describe('Child components', () => {
    test('MenuItem', () => {
      const child_component = wrapper.find(MenuItem)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
