const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
})

pool.on("connect", (err, client) => {
  console.log(`Connecting to DB "${process.env.DB_NAME}"`);
});

pool.on('error', (err, client) => {
  console.log(`Connection failed ${err}`)
})

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error(`${err}`)
  } else {
    console.log(`at: ${res.rows[0].now}`)
  }
})

module.exports = pool
