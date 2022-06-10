const fs = require('fs')
const util = require('util');

const db = require('../writeDatabase/connectDB')

exports.home = function (req, res) {
    
    async function sendJSON() {
        const sqlStr = 'select * from home'
        let requestCards = await db.query(sqlStr)
        let cards = requestCards[0]
        const queryRows = 'select * from homeCardRows where homeCardRows.card_id = ?'
        for (card of cards){
            let threeRows = await db.query(queryRows, [card.ID])
            card["card_item"] = threeRows[0]
        }
        await res.send(cards);
    }
    sendJSON()
    
    // fs.readFile('./database.json', 'utf8', function(err, dataStr){
    //     const data = JSON.parse(dataStr);
    //     res.send(data.card_list)
    // })
    res.setHeader('Access-Control-Allow-Origin', '*')
}


exports.news = function (req, res) {

    
    async function sendJSON(){
        const sqlStr = 'select * from news'
        let results = await db.query(sqlStr);
        
        await res.send(results[0]);
    }
    
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    setTimeout(()=>{sendJSON()},2000)
}



    // fs.readFile('./database.json', 'utf8', function(err, dataStr){
    //     if(err){
    //         console.log('error in reading files')
    //     }
    //     const data = JSON.parse(dataStr);
        
    //     res.send(data.newsNum);

    // })