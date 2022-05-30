const mysql = require('mysql2')

exports.db = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: '19981121ye',
    database: 'ukeban'
})

