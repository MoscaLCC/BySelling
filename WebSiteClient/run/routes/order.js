var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var db = req.connection;
    db.query('SELECT * FROM DEPLOY' , function(error, result, client){
        var dep = result;

        if (dep.length != 0){
            console.log(result.length)
            res.cookie('deploy', 1)
            res.cookie('nome', dep[0].NAME);
            console.log("merda" + req.cookies.nome);
            res.cookie('email', dep[0].EMAIL);
            res.cookie('phone', dep[0].PHONE);
            res.cookie('address', dep[0].ADRESS);
            res.cookie('site', dep[0].WEBPAGE_LINK);
            res.cookie('face', dep[0].FACEBOOK_LINK);
            res.cookie('twitter', dep[0].TWITTER_LINK);
            res.cookie('nif', dep[0].NIF);
            if(req.cookies.onlineC === undefined){
                res.redirect('/signin')
            }
            else{
                res.redirect('/home')
            }
        }
        else{
            res.redirect('/indisponivel')
        }
    })
})

module.exports = router;
