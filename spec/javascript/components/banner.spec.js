import { mount } from '@vue/test-utils'
import Banner from '@/components/banner'

describe('Banner', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Banner, { sync: true })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('has data properties', () => {
    const expected = ['I18n']
    const received = Object.keys(wrapper.vm.$data)
    expect(received).toEqual(expected)
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  })
})
