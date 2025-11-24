import 'lexxy'
import '@hotwired/turbo-rails'
import '@rails/actiontext'

import sort from 'admin/components/sortable'
import modal from 'admin/components/modal'

document.addEventListener('turbo:load', () => {
  modal('[data-toggle=modal]')
  sort('.sortable')
})
