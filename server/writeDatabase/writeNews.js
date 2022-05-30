

const mysql = require('mysql2')
const db = require('./connectDB.js')
db.query('select 1', (err, results) => {
    if(err) return console.log(err.message)
    console.log(results)
})

db.query('select 1', (err, results) => {
    if(err) return console.log(err.message)
    console.log(results)
}) 