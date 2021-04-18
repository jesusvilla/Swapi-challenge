import { v4 as uuidv4 } from 'uuid'

import responseJson from '~/utils/responseJson.js'
import CustomError from '~/utils/error.js'
import database from '~/utils/database.js'

export const handler = responseJson(async (request) => {
  const { body } = request

  if (body === undefined) {
    throw new CustomError('Request body is required')
  }

  const id = uuidv4()
  await database.put({
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      ...body,
      id
    }
  }).promise()

  return { id }
})
