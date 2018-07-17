import { mount, shallowMount } from '@vue/test-utils'
import Skill from '@/components/skill'
import Skills from '@/components/skills'
import create from '../settings/utils'

describe('Skills', () => {
  let wrapper

  beforeAll(() => {
    window.gon = { skills: create('skills') }

    wrapper = mount(Skills)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['skills', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Child components', () => {
    test('Skill', () => {
      const child_component = wrapper.find(Skill)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Renders 2 Skill objects', () => {
      wrapper = shallowMount(Skills)
      const skills = wrapper.findAll(Skill)
      expect(skills.length).toBe(2)
    })
  })
})
