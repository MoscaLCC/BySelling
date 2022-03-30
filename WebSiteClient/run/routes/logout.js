var express = require('express');
var router = express.Router();
var cookieParser = require("cookie-parser")

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {
        res.clearCookie("onlineC")
        res.redirect('/signin')
    }
});



module.exports = router;