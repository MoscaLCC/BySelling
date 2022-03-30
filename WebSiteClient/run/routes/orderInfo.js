var express = require('express');
var router = express.Router();
const TreeMap = require("treemap-js");

/* GET home page. */
router.get('/:orderID', function(req, res, next) {
    var stepService = new TreeMap();
    var serviceOption = new TreeMap();
    var steps = [];
    var services =  [];
    var array = new Array();
    var array2 = new Array();
    if (req.cookies.deploy === undefined) {
        res.redirect('/')
    }
    else if (req.cookies.onlineC === undefined) {
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
                    db.query("SELECT * FROM ORDEM WHERE ID_ORDER=?", req.params.orderID, function (error, result, client) {
                        var ordem = result[0];
                        db.query("SELECT * FROM ORDER_PRODUCT WHERE ID_ORDER=?", req.params.orderID, function (error, result, client) {
                            var results = result[0];
                            var currentOptionID = results.id_PRODUCT;
                            db.query("SELECT * FROM PRODUTO WHERE id_PRODUCT=?", currentOptionID, function (error, result, client) {
                                var productName = result[0]; 
                                res.render('orderInfo', {
                                    title: 'Informação Encomenda',
                                    ordprod: results,
                                    products: productName,
                                    ordem: ordem,
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
                    });
                });
            });
        });
    }
});

router.get('/finalizar/:ordemID', function(req, res, next) {

    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }else if (req.cookies.online === undefined){
        res.redirect('/')
    }
    else{
        var db = req.connection;
        db.query("Select Client_NIF FROM ORDEM where ID_ORDER=?",req.params.ordemID, function (error, result, client) {
           client_nif=result[0].Client_NIF
            db.query("Select EMAIL FROM CLIENT where EMAIL=?",client_nif, function (error, result, client) {
                var c_email = result[0].EMAIL
                db.query("UPDATE ORDEM set STATUS = 4 where ID_ORDER=?",req.params.ordemID, function (error, result, client) {
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
                            res.json({yo: 'error'});
                        } else {
                            console.log('Message sent: ' + info.response);
                            res.json({yo: info.response});
                        }
                        ;
                    });
                    res.redirect('/orderInfo/' + req.params.ordemID);
                });
            });
        });
    }
});

module.exports = router;