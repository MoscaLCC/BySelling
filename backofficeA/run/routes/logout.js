var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }
    else {
        res.clearCookie("online")
        res.redirect('/');
    }
});

module.exports = router
