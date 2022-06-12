

const mysql = require('mysql2')
const db = require('./connectDB.js')
const fs = require('fs')

const sqlStr = 'INSERT INTO news (img, title, content, time) VALUES (?,?,?,?)'

fs.readFile('./database.json', 'utf8', function(err, dataStr){
    if (err){
        console.log(err)
    }
    const data = JSON.parse(dataStr);

    for(let i = 0; i < 500; i++){
        for (let newsCard of data.newsNum){
            db.query(sqlStr, [newsCard.img, newsCard.title, newsCard.content, newsCard.time], (err, results) => {
                if(err) return console.log(err.message)
                console.log('success')
            })
        }
    }
})
