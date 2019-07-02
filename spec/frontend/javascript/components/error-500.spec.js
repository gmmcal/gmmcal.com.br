import { mount } from '@vue/test-utils'
import Error500 from '@/components/error-500'
import create from '../settings/utils'

describe('Error', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Error500)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
