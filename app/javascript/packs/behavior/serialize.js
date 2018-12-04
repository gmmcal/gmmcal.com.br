// FIXME: Review and rewrite this function. For now, it works
const serialize = o => {
  const iter = (o, path) => {
    if (Array.isArray(o)) {
      o.forEach(function (a) {
        iter(a, path + '[]')
      })
      return
    }
    if (o !== null && typeof o === 'object') {
      Object.keys(o).forEach(function (k) {
        iter(o[k], path + '[' + k + ']')
      })
      return
    }
    data.push(path + '=' + o)
  }

  const data = []
  Object.keys(o).forEach(function (k) {
      iter(o[k], k)
  })
  return data.join('&')
}

export default serialize
