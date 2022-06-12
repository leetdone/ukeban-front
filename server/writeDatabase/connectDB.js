const dotenv = require('dotenv')
const mysql = require('mysql2/promise')
// import 'dotenv/config'
// import express from 'express'
require('dotenv').config()

const {
    HOST,
    ROOT,
    PASSWORD,
    DATABASE,
} = process.env
// console.log(HOST)
// console.log(ROOT)
// console.log(PASSWORD)
// console.log(DATABASE)
let pool = mysql.createPool({
    host: HOST,
    user: ROOT,
    password: PASSWORD,
    database: DATABASE,
})
// const db = 1
module.exports = pool

  