import fetch from 'node-fetch'

import responseJson from '~/utils/responseJson.js'
import CustomError from '~/utils/error.js'

/**
 * @doc: https://swapi.py4e.com/api/species/3/
 */
export const handler = responseJson(async (request) => {
  const { id } = request.params

  const response = await fetch(`https://swapi.py4e.com/api/species/${id}`)
  const body = await response.json()

  if (!response.ok) {
    throw new CustomError(body.detail, response.status)
  }

  return {
    promedio_altura: body.average_height,
    promedio_vida: body.average_lifespan,
    clasificacion: body.classification,
    creado: body.created,
    designacion: body.designation,
    editado: body.edited,
    color_ojo: body.eye_colors,
    color_peinado: body.hair_colors,
    mundo_natal: body.homeworld,
    lenguaje: body.language,
    nombre: body.name,
    personas: body.people,
    peliculas: body.films,
    color_piel: body.skin_colors,
    enlace: body.url
  }
})
