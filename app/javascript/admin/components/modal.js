const open = (event) => {
  event.preventDefault()
  const el = event.target
  const modal = document.querySelector(el.dataset.target)
  modal.classList.add('d-block', 'show')
  const backdrop = document.querySelector('.modal-backdrop', el)
  backdrop.classList.add('show')
  backdrop.classList.remove('d-none')
  const dismiss = document.querySelector('[data-bs-dismiss=modal]', el)
  dismiss.onclick = close
}

const close = (event) => {
  event.preventDefault()
  const backdrop = document.querySelector('.modal-backdrop')
  backdrop.classList.remove('show')
  backdrop.classList.add('d-none')
  const openModal = document.querySelector('.modal.d-block')
  openModal.classList.remove('d-block', 'show')
  const body = document.querySelector('body')
  body.classList.remove('modal-open')
}

const modal = (selector) => {
  const el = document.querySelector(selector)
  if (el !== null) {
    el.onclick = open
  }
}

export default modal
