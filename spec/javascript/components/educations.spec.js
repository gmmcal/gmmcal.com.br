import { mount, shallowMount } from '@vue/test-utils'
import Educations from '@/components/educations'
import Education from '@/components/education'
import create from '../settings/utils'

describe('Educations', () => {
  let wrapper

  beforeEach(() => {
    window.gon = { educations: create('educations') }

    wrapper = mount(Educations)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['educations', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('Child components', () => {
    it('includes Educations', () => {
      const child_component = wrapper.find(Educations)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('renders 2 Education objects', () => {
      wrapper = shallowMount(Educations)
      const educations = wrapper.findAll(Education)
      expect(educations.length).toBe(2)
    })
  })
})
