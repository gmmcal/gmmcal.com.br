import Sortable from 'sortablejs'
import Rails from 'rails-ujs'

import serialize from './serialize'

const sort = (selector) => {
  const element = document.querySelector(selector)
  const model = element.dataset.model
  const url = element.dataset.url
  const sortable = Sortable.create(element, {
    onSort: () => {
      const data = {
        reorder: {
          model: model,
          ids: sortable.toArray()
        }
      }

      Rails.ajax({
        type: 'PUT',
        url: url,
        data: serialize(data)
      })
    }
  })
}

export default sort
