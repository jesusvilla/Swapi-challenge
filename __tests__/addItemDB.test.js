const mod = require('./../lib/handlers/specie/addItemDB.js')
const modGet = require('./../lib/handlers/specie/getItemDB.js')
const data = require('./data.json')
const { runBody, runParams } = require('./utils.js')

describe('Species.setItem', () => {
  let id
  beforeAll((done) => {
    done()
  })

  it('Agregar item', async () => {
    const response = await runBody(mod, data)
    id = response.body.id
    expect(response.body).toBeDefined()
    expect(response.statusCode).toEqual(200)
  })

  it('Verificar item', async () => {
    const response = await runParams(mod, { id })
    expect(response.body).toEqual(data)
    expect(response.statusCode).toEqual(200)
  })
})