const mysql = require('mysql2')

const db = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: 
    database: 'ukeban'
})

db.query('select 1', (err, results) => {
    if(err) return console.log(err.message)
    console.log(results)
})

db.query('select 1', (err, results) => {
    if(err) return console.log(err.message)
    console.log(results)
})
