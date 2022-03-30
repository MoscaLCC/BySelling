var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:userID', function(req, res, next) {
    var db = req.connection;

    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }else if (req.cookies.online === undefined){
        res.redirect('/')
    }
else {
        db.query("SELECT COUNT(idMESSAGES) AS mg FROM ADMIN_MESSAGE WHERE Tipo=0 and IS_READ=1", function (error, result, client) {
            req.app.locals.inbox = result[0].mg;
            db.query("SELECT COUNT(ID_ORDER) AS ord FROM ORDEM WHERE STATUS=0", function (error, result, client) {
                req.app.locals.missedOrders = result[0].ord;
                db.query("SELECT COUNT(ID_TASK) AS tamanho FROM Task WHERE STATE=0", function (error, result, client) {
                    req.app.locals.missedMenu = result[0].tamanho;
                        //console.log(req.params.userID);
                        db.query("SELECT * FROM CLIENT WHERE EMAIL=?", req.params.userID, function (error, result, client) {
                            userInfo = result;
                            db.query("SELECT * FROM `ORDEM` WHERE Client_NIF= ?", req.params.userID, function (error, result, client) {
                                numeroEncomendas = result;
                                //console.log(numeroEncomendas[0]);
                                db.query("SELECT BEGIN_DATE FROM `ORDEM` WHERE Client_NIF =? ORDER BY BEGIN_DATE LIMIT 1", req.params.userID, function (error, result, client) {
                                    ultimaEncomenda = result;

                                    res.render('clientInfo', {
                                        title: 'ClientInfo',
                                        user: userInfo,
                                        nOrder: numeroEncomendas,
                                        uOrder: ultimaEncomenda,
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
})

router.post('/:id', function (req, res) {

    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }
    else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var db = req.connection;
        db.query("SELECT IS_BLOCKED FROM CLIENT WHERE EMAIL=?", req.params.id, function (error, result, client) {

            if (result[0].IS_BLOCKED == 0) {
                db.query("UPDATE CLIENT SET IS_BLOCKED=1 WHERE EMAIL=?", req.params.id, function (error, result, client) {
                    res.redirect('back');
                });
            }
            else {
                db.query("UPDATE CLIENT SET IS_BLOCKED=0 WHERE EMAIL=?", req.params.id, function (error, result, client) {
                    res.redirect('back');
                });
            }
        });
    }
})

module.exports = router;
