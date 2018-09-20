import { mount, shallowMount } from '@vue/test-utils'
import Menu from '@/components/menu'
import MenuItem from '@/components/menu-item'
import create from '../settings/utils'

describe('Menu', () => {
  let props, wrapper

  beforeEach(() => {
    props = {
      propsData: {
        items: create('menu_items'),
        monitor_scroll: true
      }
    }

    wrapper = mount(Menu, props)
  })

  afterEach(() => {
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

  describe('Child components', () => {
    it('includes MenuItem', () => {
      const child_component = wrapper.find(MenuItem)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('renders 2 MenuItem objects', () => {
      props.propsData.monitor_scroll = false
      wrapper = shallowMount(Menu, props)
      const menu_items = wrapper.findAll(MenuItem)
      expect(menu_items.length).toBe(2)
    })
  })
})
