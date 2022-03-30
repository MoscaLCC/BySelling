var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");
var path = require('path');
var url = require('url');
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }    else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else {var db = req.connection;
        db.query('SELECT * FROM PRODUTO WHERE isActive = 1 ORDER BY NAME', function (err, rows) {
            products = rows;
            console.log(JSON.stringify(products));
            res.render('services', {
                title: 'Produtos',
                dataProducts: products,
                mail: req.cookies.email,
                nome: req.cookies.nome
            });

        });

    }
});

module.exports = router;
