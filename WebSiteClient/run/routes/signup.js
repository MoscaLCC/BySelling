var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser")
var user = require("../models/user")
var formidable = require("formidable")
var fs = require('fs')
/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else {
        res.render('lr', {title: 'Signup', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
    }
  
});

router.post('/',function(req,res,next) {
    if (req.cookies.deploy == undefined){
        res.redirect('/indisponivel')
    }
    else {
        var form = new formidable.IncomingForm();
        var status = ""

        form.parse(req, function (err, fields, files) {

            console.log(JSON.stringify(fields))
            var db = req.connection;
            //verificar se já existe algum utilizador com o username inserido no formulário
            db.query('SELECT * FROM CLIENT WHERE EMAIL ="' + fields.email + '"', function (err2, docs) {
                if (!err2) {
                    if (docs.length === 0) {
                        console.log(fields.pass)
                        console.log(fields.cpassword)
                        var images_dir = './public/images/upload/'
                        if (fields.pass != fields.cpassword) {
                            status = "Erro na confirmação de password"
                            res.render('lr', {title: 'Signup', status: status, NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
                        }
                        else {
                            if(files.foto1.name != ""){
                                var extension = files.foto1.name.split(".")
                                extension = extension[extension.length-1]
                                fields.fotografia = fields.email.split('@')[0] + "." + extension

                                try {
                                    curPath = images_dir + fields.email.split('@')[0] + "." + extension
                                    fs.unlinkSync(curPath)
                                } catch(e){
                                    console.log(e)
                                }


                                fs.rename(files.foto1.path, './public/images/upload/' + fields.fotografia, function(err1){
                                    if(!err1){
                                        console.log("Ficheiro recebido e guardado com sucesso")
                                    }
                                    else{
                                        console.log("Ocorreram erros na gravação do ficheiro enviado")
                                        console.log(err1)
                                    }
                                })
                            }
                            else{
                                fields.fotografia = "avatar.png"
                            }

                            fields.name = fields.fname

                            var querysql = "INSERT INTO `CLIENT` (`NAME`, `NIF`, `EMAIL`, `PHONE`, `STREET`, `DOOR_NUMBER`, `CITY`, `COUNTRY`, `ZIP_CODE`, `PASS`, `IS_BLOCKED`, `img_path`, `IS_APPROVED`, `data_registo`) VALUES('" + fields.name + "'," + fields.nif + ",'" + fields.email + "','" + fields.phone + "','" + fields.rua + "'," + fields.porta + ",'" + fields.city + "','" + fields.country + "','" + fields.zip + "','" + fields.pass + "',0,'"+fields.fotografia +"',0,CURDATE())"
                            db.query(querysql, function (err3, result, clint) {
                                db.query("INSERT INTO Task (DESCRIPTION, STATE, Client_NIF, Tipo, dataPedido, Ordem_ID) VALUES('O cliente " + fields.name + " pretende registar-se na aplicação',0,?,0,CURDATE(),null)", fields.email, function (err1, result, clint) {
                                    if (!err3) {
                                        var transp = req.transporter;
                                        var mailOptions = {
                                            from: req.cookies.email,
                                            to: req.cookies.email,
                                            subject: "Nova Tarefa",
                                            text: "Possui uma nova tarefa relativa à aprovação de um registo"
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
                                        status = "Registo Efetuado com sucesso."
                                        console.log("Registo Efetuado com sucesso")
                                        res.redirect("/signin")
                                    }
                                    else {
                                        console.log("Erro ao efetuar o registo:\r\n" + err3 + "\r\n\r\n");
                                        status = " Ocorreu um erro: " + err3
                                        res.render('lr', {title: 'Signup', status: status, NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif});
                                    }
                                });
                            });

                        }
                    }
                    else {
                        res.render('lr', {title: 'Signup', status: 'Já existe um utilizador com esse nif', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif})
                    }
                }
                else {
                    console.log("Erro a adicionar utilizador: " + err2)
                    res.render('lr', {title: 'Signup', status: 'Ocorreu um erro, por favor tente novamente', NOME: req.cookies.nome, EMAIL: req.cookies.email, PHONE: req.cookies.phone, MORADA: req.cookies.address, SITE: req.cookies.site, FACE: req.cookies.face, TWITTER: req.cookies.twitter, NIF: req.cookies.nif})
                }
            })

        })
    }
})

module.exports = router;
