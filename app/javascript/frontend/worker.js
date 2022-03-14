class Worker {
  _selector = '#offline'
  _serviceWorkerPath = '/service-worker.js'
  _scope = './'

  constructor() {
    if (!document.querySelector(this.selector) && navigator.serviceWorker) {
      this.registerWorker()
    }
  }

  get selector() {
    return this._selector
  }

  get path() {
    return this._serviceWorkerPath
  }

  get scope() {
    return this._scope
  }

  registerWorker() {
    navigator.serviceWorker.register(this.path, { scope: this.scope })
  }
}

export default Worker
