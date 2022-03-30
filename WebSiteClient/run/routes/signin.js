var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser")
var cookieParser = require("cookie-parser")
var user = require("../models/user")
var formidable = require("formidable")
var mongoose = require("mongoose")
var util = require("util");
var fs = require("fs");
var path = require('path');
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.cookies.deploy ==  undefined){
        res.redirect('/indisponivel')
    }
    else {
        res.render('lr', {title: 'Login', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
    }
});

router.post('/',function(req,res,next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }

    else {
        var db = req.connection;
        var form = new formidable.IncomingForm();
        var status = ""
        form.parse(req, function (err, fields, files) {
            db.query('SELECT * FROM CLIENT WHERE EMAIL ="' + fields.username + '"', function (err2, docs) {
                if (!err2) {
                    if (docs.length > 0) {
                        // nao é suposto haver mais do que um resultado
                        console.log("EMAIL=> " + fields.username)
                        console.log("PASS => " + docs[0].PASS + " TENTATIVA => " + fields.password)
                        if (docs[0].PASS === fields.password) {
                            if (docs[0].IS_APPROVED==1) {
                                if (docs[0].IS_BLOCKED==1){
                                    res.render('lr', {title: 'Login', status: 'Conta bloqueada', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
                                }
                                else{
                                    console.log("nif", fields.username)
                                    res.clearCookie("onlineC")
                                    res.cookie('onlineC', fields.username)
                                    res.redirect('/order')
                                }

                            }
                            else {
                                res.render('lr', {title: 'Login', status: 'Conta ainda não aprovada', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
                            }
                        }
                        else {
                            res.render('lr', {title: 'Login', status: 'Password errada para o utilizador inserido', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
                        }
                    }
                    else {
                        res.render('lr', {title: 'Login', status: 'Utilizador Enexistente', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
                    }

                }
                else {
                    console.log("Occoreu um erro ao fazer o login do user " + fields.username + " : \r\n" + err2 + "\r\n\r\n")
                    res.render('lr', {title: 'Login', status: 'Ocorreu um erro, por favor tente novamente', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
                }

            })
        })
    }
})

module.exports = router;