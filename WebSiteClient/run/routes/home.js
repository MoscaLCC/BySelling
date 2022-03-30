var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {

        var nif = req.cookies.onlineC;
        var db = req.connection
        db.query('SELECT * FROM ORDEM WHERE client_NIF ="' + nif + '"', function (err2, docs) {
            if (!err2) {
                res.render('home', {title: 'Home', encomendas: docs, NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
            }
            else {
                console.log("Ocorreu um erro ao carregar a pagina home")
            }
        })
    }
})

router.get('/alterar/:orderID', function(req, res, next) {
    var nif = req.cookies.onlineC;
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {
        var db2 = req.connection;

        var params=[nif,req.params.orderID]
        db2.query("INSERT INTO Task (DESCRIPTION, STATE, Client_NIF, Tipo, dataPedido, Ordem_ID) VALUES('O cliente com o NIF="+ nif+ "pretende alterar a encomenda "+req.params.orderID+"',0,?,2,CURDATE(),?)", params , function (err1, result, clint) {

            var transp = req.transporter;
            var mailOptions = {
                from: req.cookies.email,
                to: req.cookies.email,
                subject: "Nova Tarefa",
                text: "Possui uma nova tarefa relativa à alteração de uma encomenda"
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
            res.redirect("/home")
        })
    }
})

router.get('/cancelar/:orderID', function(req, res, next) {

    var nif = req.cookies.onlineC;
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {

        var db2 = req.connection
        var params=[nif,req.params.orderID]
        db2.query("INSERT INTO Task (DESCRIPTION, STATE, Client_NIF, Tipo, dataPedido, Ordem_ID) VALUES('O cliente com o NIF= "+nif+ "pretende cancelar a encomenda "+req.params.orderID+"',0,?,1,CURDATE(),?)", params, function (err1, result, clint) {

            var transp = req.transporter;
            var mailOptions = {
                from: req.cookies.email,
                to: req.cookies.email,
                subject: "Nova Tarefa",
                text: "Possui uma nova tarefa relativa ao cancelamento de uma encomenda"
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
            res.redirect("/home")

        })
    }
})

module.exports = router;