const fs = require('fs')
const util = require('util');

const db = require('../writeDatabase/connectDB')

exports.home = function (req, res) {
    //发送json信息
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
    res.setHeader('Access-Control-Allow-Origin', '*')
}


exports.news = function (req, res) {

    console.log(req.query)
    async function sendJSON(){
        //支持无限滚动之后的换页，每页20条news
        const sqlStr = `select * from news where id > ${parseInt(req.query.page) * 20} and id < ${(parseInt(req.query.page)+1 )* 20}`
        let results = await db.query(sqlStr);
        
        await res.send(results[0]);
    }
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    // setTimeout(()=>{sendJSON()},2000)
    sendJSON()
}


