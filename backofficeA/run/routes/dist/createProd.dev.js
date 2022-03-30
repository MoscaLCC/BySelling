"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var router = express.Router();

var cookieParser = require("cookie-parser");

var formidable = require("formidable");

var fs = require('fs');

router.get('/', function (req, res, next) {
  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    res.render('createProd', {
      title: 'Novo Produto',
      mail: req.cookies.email,
      nome: req.cookies.nome
    });
  }
});
router.post('/', function (req, res, next) {
  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    var form = new formidable.IncomingForm();
    var status = "";
    form.parse(req, function (err, fields, files) {
      console.log(JSON.stringify(fields));
      var db = req.connection;
      var db2 = req.connection;
      var images_dir = './public/images/upload/';

      if (files.foto1.name != "") {
        var extension = files.foto1.name.split(".");
        extension = extension[extension.length - 1];
        fields.fotografia = "prod_" + fields.nameo + "." + extension;

        try {
          curPath = images_dir + "prod_" + fields.nameo + "." + extension;
          fs.unlinkSync(curPath);
        } catch (e) {
          console.log(e);
        }

        fs.rename(files.foto1.path, './public/images/upload/' + fields.fotografia, function (err1) {
          if (!err1) {
            console.log("Ficheiro recebido e guardado com sucesso");
          } else {
            console.log("Ocorreram erros na gravação do ficheiro enviado");
          }
        });
      } else {
        fields.fotografia = "avatar.png";
      }

      fields.name = fields.fname;
      var querysql = "INSERT INTO `PRODUTO` (`NAME`, `DESCRIPTION`, `QUANTITY_PER_PACK`, `SIZE`, `FOTO`, `isActive`) VALUES('" + fields.nameo + "','" + fields.desc + "',0,'0','" + fields.fotografia + "',1)";
      db.query(querysql, function (err3, result, clint) {
        db.query("SELECT * FROM `PRODUTO`", function (err3, result, clint) {
          var idProd = result[result.length - 1].id_PRODUCT;
          var flag = true;
          var i = 1;
          var flag2 = true;
          var j = 1;
          var querysql2 = "";

          while (flag) {
            if (fields['tams_' + i] != undefined) {
              querysql2 = querysql2 + "INSERT INTO `size` (`size`, `produto`, `type`) VALUES ('" + fields['tams_' + i] + "', " + idProd + ", '0'); \n";
            } else {
              flag = false;
            }

            i++;
          }

          while (flag2) {
            if (fields['quants_' + j] != undefined) {
              querysql2 = querysql2 + "INSERT INTO `size` (`size`, `produto`, `type`) VALUES ('" + fields['quants_' + j] + "', " + idProd + ", '1'); \n";
            } else {
              flag2 = false;
            }

            j++;
          }

          console.log(querysql2);
          db.query(querysql2, function (err3, result, clint) {
            res.redirect("/services");
          });
        });
      });
    });
  }
});
module.exports = router;