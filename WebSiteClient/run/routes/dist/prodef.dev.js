"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var router = express.Router();

var cookieParser = require("cookie-parser");

var formidable = require("formidable"); //var app = express()
//var bodyParser = require("body-parser")
//app.use(bodyParser.json())

/* GET home page. */


router.get('/', function (req, res, next) {
  if (req.cookies.deploy == undefined) {
    res.redirect('/indisponivel');
  } else if (req.cookies.onlineC === undefined) {
    res.redirect('/signin');
  } else {
    var db = req.connection;
    db.query('SELECT * FROM PRODUTO WHERE isActive = 1 ORDER BY NAME', function (err, rows) {
      products = rows;
      console.log(JSON.stringify(products));
      res.render('prodef', {
        title: 'Encomenda',
        dataProducts: products,
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
  }
});
router.post('/', function (req, res, next) {
  if (req.cookies.deploy == undefined) {
    res.redirect('/indisponivel');
  } else if (req.cookies.onlineC === undefined) {
    res.redirect('/signin');
  } else {
    var db = req.connection;
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      var date = new Date();
      date.addDays(5);
      var params1 = [req.cookies.onlineC, date, fields.nameproduto];
      db.query('INSERT INTO `id4056546_uniline`.`ordem` (`BEGIN_DATE`, `CLOSE_DATE`, `Client_NIF`, `ASKED_DELIVERY_DATE`, `STATUS`, `PRODUTO`, `TRACKING`) VALUES (CURDATE(),null,?,?,0,?,"")', params1, function (error, result, client) {
        db.query('SELECT MAX(ID_ORDER) as max FROM ORDEM', function (error, result, client) {
          var idorder = result[0].max;
          db.query('INSERT INTO ORDER_PRODUCT (ID_ORDER, id_PRODUCT, opcao_valor, insertionDate) VALUES(' + idorder + ',' + fields.idproduto + ',"' + fields.size + "_" + fields.quant + '",curdate());', function (error, result, client) {
            console.log(result);
            console.log(error);
            res.redirect("/home");
          });
        });
      });
    });
  }
});

Date.prototype.addDays = function (days) {
  this.setDate(this.getDate() + parseInt(days));
  return this;
};

module.exports = router;