import { mount } from '@vue/test-utils'
import Skill from '@/components/skill'
import create from '../settings/utils'

describe('Skill', () => {
  let props, wrapper

  beforeAll(() => {
    props = {
      propsData: {
        skill: create('skill')
      }
    }

    wrapper = mount(Skill, props)
  })

  test('Component data properties', () => {
    const expected = []
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test.skip('OnStep', () => {
  })
})
