import Icons from '@/frontend/icons'

describe('Icons', () => {
  let instance

  beforeEach(() => {
    instance = new Icons()
  })

  it('works', () => {
    expect(instance.mutateApproach).toEqual('sync')
  })

  it('works', () => {
    expect(instance.icons).toEqual([
      'github',
      'gitlab',
      'dev',
      'linkedin-in',
      'location-dot',
      'mobile-screen-button',
      'inbox'
    ])
  })
})
