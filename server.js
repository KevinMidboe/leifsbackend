require('dotenv').config()

// console.log(process.env)

const { Client } = require('pg')
const client = new Client()

client.connect()

client.query('SELECT $1::text as message', ['Hello world!'], (err, res) => {
  console.log(res.rows[0].message) // Yello world!
  client.end()
})

