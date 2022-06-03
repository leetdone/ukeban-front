

const mysql = require('mysql2')
const db = require('./connectDB.js')
const fs = require('fs')

const sqlStr = 'INSERT INTO news (img, title, content, time) VALUES (?,?,?,?)'

fs.readFile('./database.json', 'utf8', function(err, dataStr){
    const data = JSON.parse(dataStr);
    console.log(data.newsNum[0].img)
})
