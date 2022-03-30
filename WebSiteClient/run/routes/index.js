var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index',{title: 'BySelling', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
});

module.exports = router;