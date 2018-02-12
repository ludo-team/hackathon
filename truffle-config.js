// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '1234' // Match any network id
    },
    production: {
      host: "bnp5rh4ng4xh.northeurope.cloudapp.azure.com",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 4712388
    }
  }
}
