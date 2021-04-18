import responseJson from '~/utils/responseJson.js'
import CustomError from '~/utils/error.js'
import database from '~/utils/database.js'

export const handler = responseJson(async (request) => {
  const { id } = request.params

  const { Item: body } = await database.get({
    TableName: process.env.DYNAMODB_TABLE,
    Key: { id }
  }).promise()

  if (body === undefined) {
    throw new CustomError('Not found', 404)
  }

  return body
})
