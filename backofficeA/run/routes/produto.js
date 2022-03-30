var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var cookieParser = require("cookie-parser")
var formidable = require("formidable")
//var app = express()
//var bodyParser = require("body-parser")
//app.use(bodyParser.json())
/* GET home page. */


router.get('/:orderID', function(req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/')
    }
    else if(req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var db = req.connection;
        db.query('SELECT * FROM ORDEM WHERE ID_ORDER=?', req.params.orderID, function (err, rows) {
            var ord = rows[0];
            db.query('SELECT * FROM ORDER_PRODUCT WHERE ID_ORDER=?', req.params.orderID, function (err, rows) {
                var idOrder = rows[0];
                db.query('SELECT * FROM PRODUTO WHERE id_PRODUCT=?', idOrder.id_PRODUCT, function (err, rows) {
                    products = rows;
                    db.query('SELECT * FROM SIZE WHERE PRODUTO=?', idOrder.id_PRODUCT, function (err, rows) {
                        sizes = rows;
                        res.render('produto', {
                            title: 'Encomenda',
                            ordem: ord,
                            order: idOrder,
                            dataProducts: products[0],
                            dataSizes: sizes,
                            NOME: req.cookies.nome,
                            EMAIL: req.cookies.email,
                            PHONE: req.cookies.phone,
                            MORADA: req.cookies.address,
                            SITE: req.cookies.site,
                            FACE: req.cookies.face,
                            TWITTER: req.cookies.twitter,
                            NIF: req.cookies.nif,
                            editable: true
                        });
                    });
                });
            });
        });
    }
});

router.get('/see/:prodID', function(req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/')
    }
    else if(req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var db = req.connection;
        db.query('SELECT * FROM PRODUTO WHERE id_PRODUCT=?', req.params.prodID, function (err, rows) {
            products = rows;
            db.query('SELECT * FROM SIZE WHERE PRODUTO=?', req.params.prodID, function (err, rows) {
                sizes = rows;
                res.render('produto', {
                    title: 'Encomenda',
                    dataProducts: products[0],
                    dataSizes: sizes,
                    NOME: req.cookies.nome,
                    EMAIL: req.cookies.email,
                    PHONE: req.cookies.phone,
                    MORADA: req.cookies.address,
                    SITE: req.cookies.site,
                    FACE: req.cookies.face,
                    TWITTER: req.cookies.twitter,
                    NIF: req.cookies.nif,
                    editable: false
                });
            });
        });
    }
});


router.get('/delete/:prodID', function(req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/')
    }
    else if(req.cookies.online === undefined){
        res.redirect('/')
    }
    else {
        var db = req.connection;
        db.query('UPDATE PRODUTO set isActive = 0 WHERE id_PRODUCT=?', req.params.prodID, function (err, rows) { 
            db.query('DELETE FROM SIZE WHERE PRODUTO=?', req.params.prodID, function (err, rows1) {
                db.query('SELECT ID_ORDER FROM ORDER_PRODUCT WHERE id_PRODUCT=?', req.params.prodID, function (err, rows2) {
                    var orders_p = rows2;
                    console.log(JSON.stringify(orders_p))
                    var query = ""
                    for(elem in orders_p){
                        console.log(elem)
                        query = query + "UPDATE ORDEM set STATUS = 2 where ID_ORDER=" + orders_p[elem].ID_ORDER + " AND STATUS < 2; \n" 
                    }
                    console.log(query)
                    db.query(query, function (err, rows3){
                        res.redirect('/services');    
                    }); 
                });
            });
        });
    }
});
module.exports = router;