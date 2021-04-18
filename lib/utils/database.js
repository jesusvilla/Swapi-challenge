const { DocumentClient } = require('aws-sdk/clients/dynamodb') // eslint-disable-line import/no-extraneous-dependencies

let options

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  }
} else {
  options = {}
}

export default new DocumentClient(options)
