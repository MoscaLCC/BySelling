var express = require('express');
var router = express.Router();

    /* Requisição GET para página de LOGIN. */
router.get('/', function(req, res) {
    // Mostra a página de Login com qualquer mensagem flash, caso exista
    var db = req.connection;
    db.query('SELECT * FROM DEPLOY' , function(error, result, client){
        if (result.length == 0){
            res.redirect('/importar')
        }
        else {
            res.cookie('deploy', 1)
            res.render('login',{title:"Login", nome: req.cookies.nome,})
        }
    })
})

router.post('/', function(req, res){

    if(req.cookies.deploy === undefined){
        res.redirect('/')
    }
    else {

        var db = req.connection;
        db.query('SELECT * FROM ADMINISTRATOR WHERE Username=?', req.body.username, function (error, result, client) {
            if (result.length != 0) {
                if (result[0].PASSWORD == req.body.password) {
                    db.query('UPDATE ADMINISTRATOR SET IS_LOGGED=1 WHERE Username=?', req.body.username, function (error, result, client) {                 
                        db.query("SELECT * FROM DEPLOY", function(err1, result1, cliente) {
                            var dep = result1;
                            res.cookie('online', req.body.username)
                            res.cookie('deploy', 1);
                            res.cookie('nome', dep[0].NAME);
                            res.cookie('email', dep[0].EMAIL);
                            res.cookie('stat', dep[0].STATISTICS);
                            res.cookie('phone', dep[0].PHONE);
                            res.cookie('address', dep[0].ADRESS);
                            res.cookie('site', dep[0].WEBPAGE_LINK);
                            res.cookie('face', dep[0].FACEBOOK_LINK);
                            res.cookie('twitter', dep[0].TWITTER_LINK);
                            res.cookie('nif', dep[0].NIF);
                            res.redirect('/index');
                        });
                    });
                }
                else {
                    res.render('login', {flash: "Password errada"})
                }
            }
            else {
                res.render('login', {flash: "O utilizador inserido não existe"})
            }
        })
    }
})


module.exports = router