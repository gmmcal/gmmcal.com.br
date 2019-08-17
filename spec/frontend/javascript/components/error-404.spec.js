import { mount } from '@vue/test-utils'
import Error404 from '@/components/error-404'
import create from '../settings/utils'

describe('Error', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Error404)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
