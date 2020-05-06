import serialize from '@/admin/serialize'

describe('Serialize', () => {
  it('simple params', () => {
    const data = {
      foo: 'bar'
    }
    const serialized = serialize(data)
    expect(serialized).toBe('foo=bar')
  })

  it('nested params', () => {
    const data = {
      root: {
        foo: 'foo',
        bar: 'bar'
      }
    }
    const serialized = serialize(data)
    expect(serialized).toBe('root[foo]=foo&root[bar]=bar')
  })

  it('simple params with array', () => {
    const data = {
      foos: [1, 2, 3]
    }
    const serialized = serialize(data)
    expect(serialized).toBe('foos[]=1&foos[]=2&foos[]=3')
  })

  it('nested params with array', () => {
    const data = {
      root: {
        foos: [1, 2, 3]
      }
    }
    const serialized = serialize(data)
    expect(serialized).toBe('root[foos][]=1&root[foos][]=2&root[foos][]=3')
  })
})
