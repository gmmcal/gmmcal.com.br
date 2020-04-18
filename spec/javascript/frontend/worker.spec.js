import Worker from '@/frontend/worker'

describe('Worker', () => {
  let instance

  describe('Content', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="wrapper"></div>'
      navigator.serviceWorker = {
        called: 0,
        register() {
          this.called++
        }
      }
      instance = new Worker()
    })

    it('works', () => {
      expect(instance.selector).toEqual('#offline')
    })

    it('works', () => {
      expect(instance.path).toEqual('/service-worker.js')
    })

    it('works', () => {
      expect(instance.scope).toEqual('./')
    })

    it('works', () => {
      expect(navigator.serviceWorker.called).toEqual(1)
    })
  })

  describe('Content', () => {
    beforeEach(() => {
      document.body.innerHTML = '<div id="offline"></div>'
      navigator.serviceWorker = {
        called: 0,
        register() {
          this.called++
        }
      }
      instance = new Worker()
    })

    it('works', () => {
      expect(navigator.serviceWorker.called).toEqual(0)
    })
  })
})
