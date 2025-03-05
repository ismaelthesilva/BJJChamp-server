require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: process.env.POSTGRES_URL,
  migrations: {
    directory: './migrations'
  },
  pool: {
    min: 0,
    max: 10
  }
};