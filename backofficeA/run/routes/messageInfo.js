var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:messageID', function(req, res, next) {
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
                        db.query('SELECT * FROM ADMIN_MESSAGE where idMESSAGES=?', req.params.messageID, function (error, result, client) {
                            mensagem = result;
                            res.render('messageInfo', {title: 'Mensagem', mensagem: mensagem, mail: req.cookies.email, nome: req.cookies.nome});
                        });
                });
            });
        });
    }
});

router.post('/lida/:idmessage', function(req, res, next) {
    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }
    else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var db = req.connection;
        db.query("select IS_READ FROM ADMIN_MESSAGE WHERE idMESSAGES=?", req.params.idmessage, function (error, result, client) {
            if (result[0].IS_READ == 1) {
                req.app.locals.inbox--;
                db.query("UPDATE ADMIN_MESSAGE SET IS_READ=0 WHERE idMESSAGES=?", req.params.idmessage, function (error, result, client) {
                    res.redirect('/messages');
                });
            }
            else {
                res.redirect('/messages');
            }
        });
    }
});


module.exports = router;
