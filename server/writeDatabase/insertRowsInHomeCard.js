const mysql = require('mysql2')
const db = require('./connectDB.js')
const fs = require('fs')

const sqlStr = 'INSERT INTO homeCardRows (card_id,card_theme, card_subtheme, card_img, card_url, card_picture) VALUES (?,?,?,?,?,?)'

fs.readFile('./database.json', 'utf8', function(err, dataStr){
    const data = JSON.parse(dataStr);
    for (let cardNum in data.card_list){
        for(let rowNum in data.card_list[cardNum].card_item){
            db.query(sqlStr, [
                (parseInt(cardNum) + 1),
                data.card_list[cardNum].card_item[rowNum].card_theme,
                data.card_list[cardNum].card_item[rowNum].card_subtheme,
                data.card_list[cardNum].card_item[rowNum].card_img,
                data.card_list[cardNum].card_item[rowNum].card_url,
                data.card_list[cardNum].card_item[rowNum].picture_url,
                ], (err, results) => {
            if(err) return console.log(err.message)
            console.log('success')
        })
        }
    }
})