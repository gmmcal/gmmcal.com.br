import { mount } from '@vue/test-utils'
import MenuItem from '@/components/menu-item'
import create from '../settings/utils'

describe('MenuItem', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      propsData: {
        item: create('menu_item')
      }
    }

    wrapper = mount(MenuItem, props)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['I18n', 'click']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })
})
