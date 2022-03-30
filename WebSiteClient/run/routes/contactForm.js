var express = require('express');
var router = express.Router();
var cookieParser = require("cookie-parser")
var Isemail = require('isemail');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {
        res.render('contactForm', {
            title: 'Contactos',
            email: "example@email.com...",
            nome: "Inserir Nome...",
            assunto: "Inserir assunto...",
            mensagem: "Inserir mensagem...",
            NOME: req.cookies.nome,
            EMAIL: req.cookies.email,
            PHONE: req.cookies.phone,
            MORADA: req.cookies.address,
            SITE: req.cookies.site,
            FACE: req.cookies.face,
            TWITTER: req.cookies.twitter,
            NIF: req.cookies.nif
        });
    }
});

router.post('/', function(req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {
        var db = req.connection;
        var transp = req.transporter;
        var email = req.body.email;
        var nome = req.body.nome;
        var assunto = req.body.assunto;
        var mensagem = req.body.mensagem;
        if (Isemail.validate(email) == false) {
            console.log(res.render('contactForm', {
                title: 'Compor',
                status: 'O email fornecido não é válido',
                email: email,
                nome: nome,
                assunto: assunto,
                mensagem: mensagem
            }));
        }
        else {
            var mailOptions = {
                from: req.cookies.email,
                to: email,
                subject: assunto,
                text: mensagem
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
            var params = [assunto, mensagem, email]
            db.query("INSERT INTO ADMIN_MESSAGE (SUBJECT, CONTENT, client_mail, Tipo, IS_READ, IS_FAVORITE, Data) VALUES (?,?, ?, 0,1,0,CURRENT_DATE)", params, function (error, result, client) {
                console.log("ENTREI");
                res.redirect('/contact');
            });

        }
    }
});

module.exports = router