import { mount } from '@vue/test-utils'
import Body from '@/components/body'
import About from '@/components/about'
import Contact from '@/components/contact'
import Educations from '@/components/educations'
import Experiences from '@/components/experiences'
import Skills from '@/components/skills'
import create from '../settings/utils'

describe('Body', () => {
  let wrapper

  beforeEach(() => {
    window.gon = {
      about: create('about'),
      educations: create('educations'),
      experiences: create('experiences'),
      skills: create('skills')
    }

    wrapper = mount(Body)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = []
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Child components', () => {
    it('includes About', () => {
      const child_component = wrapper.find(About)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('includes Contact', () => {
      const child_component = wrapper.find(Contact)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('includes Educations', () => {
      const child_component = wrapper.find(Educations)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('includes Experiences', () => {
      const child_component = wrapper.find(Experiences)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    it('includes Skills', () => {
      const child_component = wrapper.find(Skills)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
