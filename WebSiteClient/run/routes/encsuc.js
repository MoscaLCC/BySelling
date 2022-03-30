var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var formidable = require("formidable")
var mongoose = require("mongoose")
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('encsuc', { title: 'Sucesso'});
});

router.post('/',function(req,res,next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {
        res.redirect('/')
    }
})

module.exports = router;