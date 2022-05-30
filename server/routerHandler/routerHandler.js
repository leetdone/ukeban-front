const fs = require('fs')


exports.home = function (req, res) {



    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.send(data.card_list)
    })
    res.setHeader('Access-Control-Allow-Origin', '*')
}


exports.news = function (req, res) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        if(err){
            console.log('error in reading files')
        }
        const data = JSON.parse(dataStr);
        
        res.send(data.newsNum);

    })
    res.setHeader('Access-Control-Allow-Origin', '*')
}
