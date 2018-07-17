import { mount, shallowMount } from '@vue/test-utils'
import Educations from '@/components/educations'
import Education from '@/components/education'
import create from '../settings/utils'

describe('Educations', () => {
  let wrapper

  beforeAll(() => {
    window.gon = { educations: create('educations') }

    wrapper = mount(Educations)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['educations', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Child components', () => {
    test('Educations', () => {
      const child_component = wrapper.find(Educations)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Renders 2 Education objects', () => {
      wrapper = shallowMount(Educations)
      const educations = wrapper.findAll(Education)
      expect(educations.length).toBe(2)
    })
  })
})
