import { mount } from '@vue/test-utils'
import Contact from '@/components/contact'
import create from '../settings/utils'

describe('Contact', () => {
  let wrapper

  beforeAll(() => {
    window.gon = { about: create('about') }

    wrapper = mount(Contact)
  })

  test('Component is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('Component data properties', () => {
    const expected = ['about', 'I18n', 'iconMap', 'iconMobile', 'iconEmail', 'iconGithub', 'iconLinkedin', 'iconTwitter']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Contact details', () => {
    test('Contains city', () => {
      const el = wrapper.find('#location span')
      expect(el.text()).toBe('City')
    })

    test('Contains country', () => {
      const el = wrapper.find('#location span:last-child')
      expect(el.text()).toBe('Country')
    })

    test('Contains phone number', () => {
      const el = wrapper.find('#phone_number')
      expect(el.text()).toBe('817634986124')
    })

    test('Contains email', () => {
      const el = wrapper.find('#email')
      expect(el.text()).toBe('email@domain.com')
    })

    test('Contains github', () => {
      const el = wrapper.find('#github')
      expect(el.text()).toBe('gmmcal')
    })

    test('Contains linkedin', () => {
      const el = wrapper.find('#linkedin')
      expect(el.text()).toBe('Gustavo Cunha')
    })

    test('Contains twitter', () => {
      const el = wrapper.find('#twitter')
      expect(el.text()).toBe('@gmmcal')
    })
  })
})
