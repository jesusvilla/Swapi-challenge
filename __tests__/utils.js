const { lambdaWrapper } = require('serverless-jest-plugin')

const resolve = (response) => {
  return {
    body: JSON.parse(response.body),
    statusCode: response.statusCode
  }
}

module.exports.runParams = async (mod, pathParameters) => {
  const wrapped = lambdaWrapper.wrap(mod, { handler: 'handler' })
  const response = await wrapped.run({ pathParameters })

  return resolve(response)
}

module.exports.runBody = async (mod, body) => {
  const wrapped = lambdaWrapper.wrap(mod, { handler: 'handler' })
  const response = await wrapped.run({ body: JSON.stringify(body) })

  return resolve(response)
}
