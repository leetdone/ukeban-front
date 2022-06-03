const dotenv = require('dotenv')
const mysql = require('mysql2/promise')

require('dotenv').config()

const {
    HOST,
    ROOT,
    PASSWORD,
    DATABASE,
} = process.env

let pool = mysql.createPool({
    host: HOST,
    user: ROOT,
    password: PASSWORD,
    database: DATABASE,
})
// const db = 1
module.exports = pool

  