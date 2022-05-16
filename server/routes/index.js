const homeRouter = require('./router')

const init = function (app) {
    app.get('/favicon.ico', (req, res, next) => { res.end('ignore favicon') })
    app.use('/', homeRouter)
}

module.exports = {
    init
}