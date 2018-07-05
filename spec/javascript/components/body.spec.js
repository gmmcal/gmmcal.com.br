import { mount } from '@vue/test-utils'
import Body from '@/components/body'
import About from '@/components/about'
import Contact from '@/components/contact'
import Educations from '@/components/educations'
import Experiences from '@/components/experiences'
import Skills from '@/components/skills'
import create from '../settings/utils'

describe('Body', () => {
  let props, wrapper

  beforeAll(() => {
    window.gon = {
      about: create('about'),
      educations: create('educations'),
      experiences: create('experiences'),
      skills: create('skills')
    }

    props = {
      propsData: {
        image: 'bar.jpg'
      }
    }

    wrapper = mount(Body, props)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = []
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Child components', () => {
    test('About', () => {
      const child_component = wrapper.find(About)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Contact', () => {
      const child_component = wrapper.find(Contact)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Educations', () => {
      const child_component = wrapper.find(Educations)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Experiences', () => {
      const child_component = wrapper.find(Experiences)
      expect(child_component.isVueInstance()).toBeTruthy()
    })

    test('Skills', () => {
      const child_component = wrapper.find(Skills)
      expect(child_component.isVueInstance()).toBeTruthy()
    })
  })
})
