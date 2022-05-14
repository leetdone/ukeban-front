const express = require('express')
const router = express.Router()

const routerHandler = require('../routerHandler/routerHandler')

/* GET users listing. */


router.get('/home', routerHandler.home);
router.get("/news", routerHandler.news);

//redirect to wechat website, but need an address, in ukeban.com no address is required 


module.exports = router
/* 
use router.get to create router to 
https://www.ukeban.com/#/product
https://www.ukeban.com/#/personal
https://www.ukeban.com/#/newsc
https://www.ukeban.com/#/merchant
https://www.ukeban.com/#/helpcenter
*/

//what to execute in middleware, need to call db?
//build API to interact with frontend?
//same https, different pages
//产品介绍，关于我们 404 at the bottom

