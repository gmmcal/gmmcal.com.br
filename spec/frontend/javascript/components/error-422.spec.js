import { mount } from '@vue/test-utils'
import Error422 from '@/components/error-422'
import create from '../settings/utils'

describe('Error', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Error422)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
