import CustomError from '~/utils/error.js'

const jsonParse = (json) => {
  try {
    return JSON.parse(json)
  } catch (e) {
    throw new CustomError('Malformed JSON in request body')
  }
}

export default (asyncb) => {
  return async (event, context, cb) => {
    try {
      // const method = event.httpMethod || (event.requestContext && event.requestContext.http ? event.requestContext.http.method : undefined)
      let resBody
      if (event.body != null && event.body !== '{}') {
        resBody = jsonParse(event.body)
      }

      const body = await asyncb({
        // query: event.queryStringParameters // this is not necessary
        params: event.pathParameters,
        body: resBody
      })

      cb(null, {
        statusCode: 200,
        body: JSON.stringify(body)
      })
    } catch (error) {
      if (CustomError.isValid(error)) {
        return cb(null, {
          statusCode: error.statusCode || 400,
          body: JSON.stringify({
            detail: error.message
          })
        })
      }

      console.error(error)
      cb(null, {
        statusCode: 500,
        body: JSON.stringify({
          detail: 'Internal Server Error'
        })
      })
    }
  }
}
