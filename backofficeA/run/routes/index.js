var express = require('express');
var router = express.Router();
var app = express();
//var lol = require("../models/menuVariables")

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("ola" + req.cookies.deploy)
    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }
    else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else {

        var db = req.connection;
        //lol.local();
        db.query("SELECT COUNT(idMESSAGES) AS mg FROM ADMIN_MESSAGE WHERE Tipo=0 and IS_READ=1", function (error, result, client) {
            req.app.locals.inbox = result[0].mg;
            db.query("SELECT COUNT(ID_ORDER) AS ord FROM ORDEM WHERE STATUS=0", function (error, result, client) {
                req.app.locals.missedOrders = result[0].ord;
                db.query("SELECT COUNT(ID_TASK) AS tamanho FROM Task WHERE STATE=0", function (error, result, client) {
                    req.app.locals.missedMenu = result[0].tamanho;
                        db.query("select MONTH(BEGIN_DATE) AS mes,YEAR(BEGIN_DATE) AS ano,count(ID_ORDER) AS valor from ORDEM WHERE Date(BEGIN_DATE) >= STR_TO_DATE(CONCAT(Year(CURRENT_DATE)-1,'-',MONTH(CURRENT_DATE),'-',DAY(CURRENT_DATE)), '%Y-%m-%d') group BY MONTH(BEGIN_DATE),YEAR(BEGIN_DATE)", function (error, result, client) {
                            var lastYear = result;
                            db.query("SELECT COUNT(ID_ORDER) AS last FROM ORDEM WHERE YEAR(BEGIN_DATE)= YEAR(CURRENT_DATE)-1 and MONTH(BEGIN_DATE) = MONTH(CURRENT_DATE) and DAY(BEGIN_DATE) <= DAY(CURRENT_DATE)", function (error, result, client) {
                                var lastYearOrders = result
                                db.query("SELECT COUNT(ID_ORDER) AS tamanho FROM ORDEM WHERE YEAR(BEGIN_DATE)= YEAR(CURRENT_DATE) and MONTH(BEGIN_DATE) = MONTH(CURRENT_DATE)", function (error, result, client) {
                                    var monthOrders = result
                                    db.query("SELECT COUNT(NIF) as cli from CLIENT WHERE YEAR(data_registo)= YEAR(CURRENT_DATE) and MONTH(data_registo) = MONTH(CURRENT_DATE)", function (error, result, client) {
                                        var monthClients = result;
                                        res.render('index', {
                                            title: 'Administrador',
                                            lastYear: lastYear,
                                            lastYearOrders: lastYearOrders[0].last,
                                            monthOrders: monthOrders[0].tamanho,
                                            monthClients: monthClients[0].cli,
                                            mail: req.cookies.email,
                                            nome: req.cookies.nome,
                                            stat: req.cookies.stat
                                        });
                                    });
                                });

                            });

                        });
                });
            });
        });
    }
});

module.exports = router;
