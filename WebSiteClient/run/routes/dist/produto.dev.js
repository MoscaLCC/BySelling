"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var router = express.Router();

var cookieParser = require("cookie-parser");

var formidable = require("formidable"); //var app = express()
//var bodyParser = require("body-parser")
//app.use(bodyParser.json())

/* GET home page. */


router.get('/:orderID', function (req, res, next) {
  if (req.cookies.deploy == undefined) {
    res.redirect('/indisponivel');
  } else if (req.cookies.onlineC === undefined) {
    res.redirect('/signin');
  } else {
    var db = req.connection;
    db.query('SELECT * FROM PRODUTO WHERE id_PRODUCT=?', req.params.orderID, function (err, rows) {
      products = rows;
      db.query('SELECT * FROM SIZE WHERE PRODUTO=?', req.params.orderID, function (err, rows) {
        sizes = rows;
        res.render('produto', {
          title: 'Encomenda',
          dataProducts: products[0],
          dataSizes: sizes,
          NOME: req.cookies.nome,
          EMAIL: req.cookies.email,
          PHONE: req.cookies.phone,
          MORADA: req.cookies.address,
          SITE: req.cookies.site,
          FACE: req.cookies.face,
          TWITTER: req.cookies.twitter,
          NIF: req.cookies.nif
        });
      });
    });
  }
});
module.exports = router;