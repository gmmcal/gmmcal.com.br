import Sortable from 'sortablejs'


const sort = (selector) => {
  const element = document.querySelector(selector)
  if (element === null) {
    return
  }
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
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    }
  })
}

export default sort
