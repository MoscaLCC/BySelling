var express = require('express');
var router = express.Router();
var app = express();

/* GET home page. */
router.get('/:taskID', function(req, res, next) {
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
                        db.query("SELECT * FROM Task WHERE ID_TASK=?", req.params.taskID, function (error, result, client) {
                            var tarefa = result
                            db.query("SELECT * FROM CLIENT INNER JOIN Task ON Task.Client_NIF=CLIENT.EMAIL WHERE ID_TASK=?", req.params.taskID, function (error, result, client) {
                                var cliente = result
                                db.query("SELECT * FROM ORDEM INNER JOIN Task ON Task.Ordem_ID=ORDEM.ID_ORDER WHERE ID_TASK=?", req.params.taskID, function (error, result, client) {
                                    var encomenda = result;
                                    res.render('taskDescription', {
                                        title: 'Tasks',
                                        task: tarefa,
                                        client: cliente,
                                        order: encomenda,
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

router.put('/porra/:id', function (req, res) {
    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }    else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var inputValue = req.body.porra;
        var db = req.connection;
        db.query("SELECT Client_NIF FROM Task WHERE ID_TASK=?", req.params.id, function (error, result, client) {
            var cliente = result
            if (inputValue == "aceitar") {
                db.query("UPDATE CLIENT SET IS_APPROVED=1 WHERE EMAIL=?", cliente[0].Client_NIF, function (error, result, client) {
                    db.query("UPDATE TASK SET STATE=1 WHERE ID_TASK=?", req.params.id, function (error, result, client) {
                        req.app.locals.missedMenu = req.app.locals.missedMenu - 1
                        //req.app.locals.missedMenu = req.app.locals.missedMenu-1
                        db.query("Select * from CLIENT WHERE EMAIL=?", cliente[0].Client_NIF, function (error, result, client) {
                            var clientss=result;
                            var transp = req.transporter;
                            var mailOptions = {
                                from: req.cookies.email,
                                to: clientss[0].EMAIL,
                                subject: "Registo Uniline",
                                text: "O seu registo no software de encomendas Uniline foi aprovado"
                            };

                            transp.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                    res.json({yo: 'error'});
                                } else {
                                    console.log('Message sent: ' + info.response);
                                    res.json({yo: info.response});
                                }
                                ;
                            });
                            res.redirect('/tasks');
                        });
                    });
                });
            }
            if (inputValue == "recusar") {
                db.query("UPDATE CLIENT SET ID_BLOCKED=1 WHERE EMAIL=?", cliente[0].Client_NIF, function (error, result, client) {
                    db.query("UPDATE TASK SET STATE=1 WHERE ID_TASK=?", req.params.id, function (error, result, client) {
                        req.app.locals.missedMenu = req.app.locals.missedMenu - 1
                        res.redirect('/tasks');
                    });
                });
            }
        });
    }
});

router.put('/encomendas/:id', function (req, res) {
    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }    else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var inputValue = req.body.encomendas;
        var db = req.connection;
        db.query("SELECT Ordem_ID FROM Task WHERE ID_TASK=?", req.params.id, function (error, result, client) {
            ordem = result[0].Ordem_ID
            if (inputValue == "cancelar") {
                db.query("UPDATE ORDEM SET STATUS=2 WHERE ID_ORDER=?", ordem, function (error, result, client) {
                    db.query("UPDATE TASK SET STATE=1 WHERE ID_TASK=?", req.params.id, function (error, result, client) {
                        req.app.locals.missedMenu = req.app.locals.missedMenu - 1
                        res.redirect('/tasks');
                    });
                });
            }
        });

    }
});


module.exports = router;
