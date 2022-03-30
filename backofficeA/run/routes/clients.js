var express = require('express');
var router = express.Router();
var util = require("util");
var fs = require("fs");
var path = require('path');
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {

    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }
    else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var db = req.connection;
        db.query("SELECT COUNT(idMESSAGES) AS mg FROM ADMIN_MESSAGE WHERE Tipo=0 and IS_READ=1", function (error, result, client) {
            req.app.locals.inbox = result[0].mg;
            db.query("SELECT COUNT(ID_ORDER) AS ord FROM ORDEM WHERE STATUS=0", function (error, result, client) {
                req.app.locals.missedOrders = result[0].ord;
                db.query("SELECT COUNT(ID_TASK) AS tamanho FROM Task WHERE STATE=0", function (error, result, client) {
                    req.app.locals.missedMenu = result[0].tamanho;
                        var data = "";
                        db.query('SELECT * FROM CLIENT', function (err, rows) {
                            //if(err) throw err;

                            // console.log('Data received from Db:\n');

                            var data = rows;
                            //console.log(data);
                            res.render('clients', {title: 'Clientes', dataGet: data, mail: req.cookies.email, nome: req.cookies.nome});

                        });
                });
            });
        });
    }
});

module.exports = router;
