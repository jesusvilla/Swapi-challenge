module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    "^~(.*)$": "<rootDir>/lib$1"
  },
  testMatch: ['**/__tests__/**/*.test.js']
  // testRegex: ['/__tests__\/\\w+\\.test\\.js$/']
}
