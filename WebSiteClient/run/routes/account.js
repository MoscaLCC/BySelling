var express = require('express');
var router = express.Router();
var cookieParser = require("cookie-parser")
var countries = require("../models/countries")
var formidable = require("formidable")
var fs = require('fs')

/* GET */
router.get('/', function (req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {

        var nif = req.cookies.onlineC;

        var db = req.connection;

        db.query('SELECT * FROM CLIENT WHERE EMAIL ="' + nif + '"', function (error, user) {

            if (!error && user.length > 0) {
                res.render('account', {countries: countries, user: user[0], errors: false, NAME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif });
            }
        });
    }
});

/* POST */ 
router.post('/', function (req, res, next) {

    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else if(req.cookies.onlineC === undefined){
        res.redirect('/signin')
    }
    else {
        var form = new formidable.IncomingForm();
        var nif = req.cookies.onlineC;
        var images_dir = './public/images/upload/'

        form.parse(req, function (err, fields, files){

            if(files.foto1.name != ""){
                var extension = files.foto1.name.split(".")
                extension = extension[extension.length-1]
                fields.fotografia = nif + "." + extension

                if(fields.namefoto != "avatar.png") {
                    try {
                        curPath = images_dir + nif + "." + extension
                        fs.unlinkSync(curPath)
                    } catch (e) {
                        console.log(e)
                    }
                }

                fs.rename(files.foto1.path, '/images/upload/' + fields.fotografia, function(err1){
                    if(!err1){
                        console.log("Ficheiro recebido e guardado com sucesso")
                    }
                    else{
                        console.log("Ocorreram erros na gravação do ficheiro enviado")
                    }
                })
            }
            else{
                fields.fotografia = fields.namefoto
            }


            var db = req.connection;
            var qu = "UPDATE CLIENT SET NAME='" +fields.fname +"',NIF='"+fields.nif+"',EMAIL='"+ fields.email +"',PHONE='"+fields.phone+"',STREET='"+fields.morada+"',COUNTRY='"+fields.country+"',CITY='"+fields.city+"',ZIP_CODE='"+fields.codpost+"',img_path='"+fields.fotografia+"' WHERE EMAIL='"+nif+"'"

            console.log(qu)
            db.query(qu, function (err2, docs) {
                if (!err2) {
                    if(fields.nif != nif){
                        res.redirect("/logout")
                    }
                    else{
                        res.redirect("/home")
                    }
                }
                else{
                    res.redirect("/home")
                }
            })
        })
        }

})

module.exports = router;