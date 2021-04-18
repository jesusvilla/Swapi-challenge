const mod = require('./../lib/handlers/specie/getItem.js')
const { runParams } = require('./utils.js')

describe('Species.getItem', () => {
  beforeAll((done) => {
    done()
  })

  it('Item encontrado', async () => {
    const response = await runParams(mod, { id: 1 })
    expect(response.body).toBeDefined()
    expect(response.statusCode).toEqual(200)
  })

  it('Item no existe', async () => {
    const response = await runParams(mod, { id: 'aaaaaa' })
    expect(response.body).toEqual({ detail: 'Not found' })
    expect(response.statusCode).toEqual(404)
  })
})
