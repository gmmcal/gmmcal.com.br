import { mount, shallowMount } from '@vue/test-utils'
import Social from '@/components/social'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('Social', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Social)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['iconGithub', 'iconLinkedin', 'iconTwitter']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('Child components', () => {
    it('renders 3 FontAwesomeIcon objects', () => {
      wrapper = mount(Social)
      const icons = wrapper.findAll(FontAwesomeIcon)
      expect(icons.length).toBe(3)
    })
  })
})
