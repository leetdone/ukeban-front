const homeRouter = require('./home')

const init = function (app) {
    app.get('/favicon.ico', (req, res, next) => { res.end('ignore favicon') })
    app.use('/', homeRouter)
    // app.get('/news', (req, res)=> {
    //     console.log('get news')
    // })
}

module.exports = {
    init
}