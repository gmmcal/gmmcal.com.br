const to_param = (data, key) => {
  if (Array.isArray(data)) {
    return array_to_param(data, key)
  }
  if (data !== null && typeof data === 'object') {
    return object_to_param(data, key)
  }
  return key + '=' + data
}

const array_to_param = (data, key) => {
  const result = data.map(k => {
    return to_param(k, key + '[]')
  })
  return flatten(result)
}

const object_to_param = (data, parent_key) => {
  const result = Object.keys(data).map(key => {
    return to_param(data[key], parent_key + '[' + key + ']')
  })
  return flatten(result)
}

const flatten = array => {
  return array.reduce((a, b) => a.concat(b), [])
}

const serialize = data => {
  const result = Object.keys(data).map(key => {
    return to_param(data[key], key)
  })
  return flatten(result).join('&')
}

export default serialize
