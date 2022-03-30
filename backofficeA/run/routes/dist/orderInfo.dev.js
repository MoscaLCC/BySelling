"use strict";

var express = require('express');

var router = express.Router();

var TreeMap = require("treemap-js");

var formidable = require("formidable");
/* GET home page. */


router.get('/:orderID', function (req, res, next) {
  var stepService = new TreeMap();
  var serviceOption = new TreeMap();
  var steps = [];
  var services = [];
  var array = new Array();
  var array2 = new Array();

  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    var db = req.connection;
    db.query("SELECT COUNT(idMESSAGES) AS mg FROM ADMIN_MESSAGE WHERE Tipo=0 and IS_READ=1", function (error, result, client) {
      req.app.locals.inbox = result[0].mg;
      db.query("SELECT COUNT(ID_ORDER) AS ord FROM ORDEM WHERE STATUS=0", function (error, result, client) {
        req.app.locals.missedOrders = result[0].ord;
        db.query("SELECT COUNT(ID_TASK) AS tamanho FROM Task WHERE STATE=0", function (error, result, client) {
          req.app.locals.missedMenu = result[0].tamanho;
          db.query("SELECT * FROM ORDEM WHERE ID_ORDER=?", req.params.orderID, function (error, result, client) {
            var ordem = result[0];
            db.query("SELECT * FROM ORDER_PRODUCT WHERE ID_ORDER=?", req.params.orderID, function (error, result, client) {
              var oderprod = result[0];
              var currentStep = result[0].id_PRODUCT;
              db.query("SELECT * FROM PRODUTO WHERE id_PRODUCT=?", currentStep, function (error, result, client) {
                var products = result[0];
                console.log(JSON.stringify(products));
                res.render('orderInfo', {
                  title: 'Informação Encomenda',
                  produt: products,
                  ordprod: oderprod,
                  ordem: ordem,
                  mail: req.cookies.email,
                  nome: req.cookies.nome
                });
              });
            });
          });
        });
      });
    });
  }
});
router.post('/exportar/:ordemID', function (req, res, next) {
  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    var db = req.connection;
    db.query("Select Client_NIF FROM ORDEM where ID_ORDER=?", req.params.ordemID, function (error, result, client) {
      client_nif = result[0].Client_NIF;
      db.query("Select EMAIL FROM CLIENT where EMAIL=?", client_nif, function (error, result, client) {
        var c_email = result[0].EMAIL;
        db.query("UPDATE ORDEM set STATUS = 1 where ID_ORDER=?", req.params.ordemID, function (error, result, client) {
          var transp = req.transporter;
          var mailOptions = {
            from: req.cookies.email,
            to: c_email,
            subject: "Encomenda Aprovada",
            text: "A sua encomenda foi aprovada"
          };
          transp.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.json({
                yo: 'error'
              });
            } else {
              console.log('Message sent: ' + info.response);
              res.json({
                yo: info.response
              });
            }

            ;
          });
          res.redirect('/orderInfo/' + req.params.ordemID);
        });
      });
    });
  }
});
router.put('/encomendas/:id', function (req, res) {
  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    var db = req.connection;
    db.query("SELECT ID_TASK FROM Task WHERE Ordem_ID=? and Tipo=1", req.params.id, function (error, result, client) {
      task = result[0].ID_TASK;
      db.query("UPDATE ORDEM SET STATUS=2 WHERE ID_ORDER=?", req.params.id, function (error, result, client) {
        db.query("UPDATE TASK SET STATE=1 WHERE ID_TASK=?", task, function (error, result, client) {
          req.app.locals.missedMenu = req.app.locals.missedMenu - 1;
          res.redirect('/tasks');
        });
      });
    });
  }
});
router.post('/enviado/:ordemID', function (req, res, next) {
  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    var db = req.connection;
    db.query("Select Client_NIF FROM ORDEM where ID_ORDER=?", req.params.ordemID, function (error, result, client) {
      client_nif = result[0].Client_NIF;
      db.query("Select EMAIL FROM CLIENT where EMAIL=?", client_nif, function (error, result, client) {
        var c_email = result[0].EMAIL;
        db.query("UPDATE ORDEM set STATUS = 3 where ID_ORDER=?", req.params.ordemID, function (error, result, client) {
          var transp = req.transporter;
          var mailOptions = {
            from: req.cookies.email,
            to: c_email,
            subject: "Encomenda Enviada",
            text: "A sua encomenda foi enviada"
          };
          transp.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.json({
                yo: 'error'
              });
            } else {
              console.log('Message sent: ' + info.response);
              res.json({
                yo: info.response
              });
            }

            ;
          });
          res.redirect('/orderInfo/' + req.params.ordemID);
        });
      });
    });
  }
});
router.post('/finalizar/:ordemID', function (req, res, next) {
  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    var db = req.connection;
    db.query("Select Client_NIF FROM ORDEM where ID_ORDER=?", req.params.ordemID, function (error, result, client) {
      client_nif = result[0].Client_NIF;
      db.query("Select EMAIL FROM CLIENT where EMAIL=?", client_nif, function (error, result, client) {
        var c_email = result[0].EMAIL;
        db.query("UPDATE ORDEM set STATUS = 4 where ID_ORDER=?", req.params.ordemID, function (error, result, client) {
          var transp = req.transporter;
          var mailOptions = {
            from: req.cookies.email,
            to: c_email,
            subject: "Encomenda Finalizada",
            text: "A sua encomenda foi finalizada com sucesso!! Esperá-mos que tenha gostado dos nossos serviços"
          };
          transp.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              res.json({
                yo: 'error'
              });
            } else {
              console.log('Message sent: ' + info.response);
              res.json({
                yo: info.response
              });
            }

            ;
          });
          res.redirect('/orderInfo/' + req.params.ordemID);
        });
      });
    });
  }
});
router.post('/alterar/:ordemID', function (req, res, next) {
  if (req.cookies.deploy === undefined) {
    res.redirect('/');
  } else if (req.cookies.online === undefined) {
    res.redirect('/');
  } else {
    var db = req.connection;
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      db.query("Select Client_NIF FROM ORDEM where ID_ORDER=?", req.params.ordemID, function (error, result, client) {
        client_nif = result[0].Client_NIF;
        db.query("Select EMAIL FROM CLIENT where EMAIL=?", client_nif, function (error, result, client) {
          var c_email = result[0].EMAIL;
          var valor = fields.size + '_' + fields.quant;
          db.query("UPDATE ORDEM set TRACKING ='" + fields.track + "', ASKED_DELIVERY_DATE ='" + fields.dataentrega + "' where ID_ORDER=" + req.params.ordemID, function (error, result, client) {
            console.log(error);
            db.query("UPDATE ORDER_PRODUCT set opcao_valor ='" + valor + "' where ID_ORDER=" + req.params.ordemID, function (error, result, client) {
              var transp = req.transporter;
              var mailOptions = {
                from: req.cookies.email,
                to: c_email,
                subject: "Encomenda Actualizada",
                text: "A sua encomenda foi alterada com sucesso!! Consulte o site para ver as alterações."
              };
              transp.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                  res.json({
                    yo: 'error'
                  });
                } else {
                  console.log('Message sent: ' + info.response);
                  res.json({
                    yo: info.response
                  });
                }

                ;
              });
              res.redirect('/orderInfo/' + req.params.ordemID);
            });
          });
        });
      });
    });
  }
});
module.exports = router;