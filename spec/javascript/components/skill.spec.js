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

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = []
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('OnStep', () => {
  })
})
