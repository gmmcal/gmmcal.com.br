import { mount, shallowMount } from '@vue/test-utils'
import Experiences from '@/components/experiences'
import Experience from '@/components/experience'
import create from '../settings/utils'

describe('Experiences', () => {
  let wrapper

  beforeAll(() => {
    window.gon = { experiences: create('experiences') }

    wrapper = mount(Experiences)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['experiences', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Child components', () => {
    test('Experience', () => {
      const child_component = wrapper.find(Experience)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Renders 2 Experience objects', () => {
      wrapper = shallowMount(Experiences)
      const experiences = wrapper.findAll(Experience)
      expect(experiences.length).toBe(2)
    })
  })
})
