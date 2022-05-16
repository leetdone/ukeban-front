const express = require('express')
const router = express.Router()

const routerHandler = require('../routerHandler/routerHandler')

/* GET users listing. */

router.get('/home', routerHandler.home);
router.get("/news", routerHandler.news);

module.exports = router