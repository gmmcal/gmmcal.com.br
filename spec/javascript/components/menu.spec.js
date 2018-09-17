import { mount, shallowMount } from '@vue/test-utils'
import Menu from '@/components/menu'
import MenuItem from '@/components/menu-item'
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

  afterAll(() => {
    wrapper.destroy()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['active']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('scroll', () => {
    wrapper.trigger('scroll')
    // FIXME: really test something
  })

  describe('Child components', () => {
    it('includes MenuItem', () => {
      const child_component = wrapper.find(MenuItem)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('renders 2 MenuItem objects', () => {
      wrapper = shallowMount(Menu, props)
      const menu_items = wrapper.findAll(MenuItem)
      expect(menu_items.length).toBe(2)
    })
  })
})
