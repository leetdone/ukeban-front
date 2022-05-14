const fs = require('fs')

exports.home = function (req, res) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        const data = JSON.parse(dataStr);
        res.send(data.home)
        console.log(data.home)
        
    })
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    // next();router doesn't require next()
}


exports.news = function (req, res) {
    fs.readFile('./database.json', 'utf8', function(err, dataStr){
        if(err){
            console.log('error in reading files')
        }
        const data = JSON.parse(dataStr);
        res.send(data.newsNum)

    })
    res.setHeader('Access-Control-Allow-Origin', '*')
}
