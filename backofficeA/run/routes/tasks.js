var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }    else if (req.cookies.online === undefined){
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
                        db.query("SELECT * FROM Task WHERE STATE=0", function (error, result, client) {
                            var missed = result;
                            db.query("SELECT * FROM Task WHERE STATE=1", function (error, result, client) {
                                var unmissed = result;
                                res.render('tasks', {missedd: missed, nMissedd: unmissed, mail: req.cookies.email, nome: req.cookies.nome});
                            });

                        })
                });
            });
        });
    }
});
module.exports = router;
