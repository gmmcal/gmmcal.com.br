import { mount } from '@vue/test-utils'
import Contact from '@/components/contact'
import create from '../settings/utils'

describe('Contact', () => {
  let wrapper

  beforeEach(() => {
    window.gon = { about: create('about') }

    wrapper = mount(Contact)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['about', 'I18n', 'iconMap', 'iconMobile', 'iconEmail', 'iconGithub', 'iconLinkedin', 'iconTwitter']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('Content', () => {
    it('has a city', () => {
      const el = wrapper.find('.location span')
      expect(el.text()).toBe('City')
    })

    it('has a country', () => {
      const el = wrapper.find('.location span:last-child')
      expect(el.text()).toBe('Country')
    })

    it('has a phone number', () => {
      const el = wrapper.find('.phone_number')
      expect(el.text()).toBe('817634986124')
    })

    it('has an email', () => {
      const el = wrapper.find('.email')
      expect(el.text()).toBe('email@domain.com')
    })

    it('has a github link', () => {
      const el = wrapper.find('.github')
      expect(el.text()).toMatch('gmmcal')
    })

    it('has a linkedin link', () => {
      const el = wrapper.find('.linkedin')
      expect(el.text()).toMatch('Gustavo Cunha')
    })

    it('has a twitter link', () => {
      const el = wrapper.find('.twitter')
      expect(el.text()).toMatch('@gmmcal')
    })
  })
})
