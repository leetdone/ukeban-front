const mysql = require('mysql2')
const db = require('./connectDB.js')
const fs = require('fs')

const sqlStr = 'INSERT INTO home (card_title, card_subtitle, card_img, picture_url) VALUES (?,?,?,?)'

fs.readFile('./database.json', 'utf8', function(err, dataStr){
    const data = JSON.parse(dataStr);
    console.log(data.card_list[0])
    for (let card of data.card_list){
        db.query(sqlStr, [card.card_title, card.card_subtitle, card.card_over.card_img, card.card_over.picture_url], (err, results) => {
            if(err) return console.log(err.message)
            console.log('success')
        })
    }
})