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
    const expected = ['iconGithub', 'iconGitlab', 'iconDev', 'iconTwitter', 'iconLinkedin']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  describe('Child components', () => {
    it('renders 5 FontAwesomeIcon objects', () => {
      wrapper = mount(Social)
      const icons = wrapper.findAll(FontAwesomeIcon)
      expect(icons.length).toBe(5)
    })
  })
})
