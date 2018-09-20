import { mount, shallowMount } from '@vue/test-utils'
import Skill from '@/components/skill'
import Skills from '@/components/skills'
import create from '../settings/utils'

describe('Skills', () => {
  let wrapper

  beforeEach(() => {
    window.gon = { skills: create('skills') }

    wrapper = mount(Skills)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['skills', 'I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  describe('Child components', () => {
    it('includes Skill', () => {
      const child_component = wrapper.find(Skill)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('renders 2 Skill objects', () => {
      wrapper = shallowMount(Skills)
      const skills = wrapper.findAll(Skill)
      expect(skills.length).toBe(2)
    })
  })
})
