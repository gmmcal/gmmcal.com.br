import fs from 'fs'

const create = (file, params={}) => {
  const path = `${__dirname}/../../factories/${file}.json`
  const data = JSON.parse(fs.readFileSync(path, 'utf8'))
  return Object.assign(data, params)
}

export default create
