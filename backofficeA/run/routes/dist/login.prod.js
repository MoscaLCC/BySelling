"use strict";var express=require("express"),router=express.Router();router.get("/",function(i,n){i.connection.query("SELECT * FROM DEPLOY",function(e,o,r){0==o.length?n.redirect("/importar"):(n.cookie("deploy",1),n.render("login",{title:"Login",nome:i.cookies.nome}))})}),router.post("/",function(n,t){if(void 0===n.cookies.deploy)t.redirect("/");else{var i=n.connection;i.query("SELECT * FROM ADMINISTRATOR WHERE Username=?",n.body.username,function(e,o,r){0!=o.length?o[0].PASSWORD==n.body.password?i.query("UPDATE ADMINISTRATOR SET IS_LOGGED=1 WHERE Username=?",n.body.username,function(e,o,r){i.query("SELECT * FROM DEPLOY",function(e,o,r){var i=o;t.cookie("online",n.body.username),t.cookie("deploy",1),t.cookie("nome",i[0].NAME),t.cookie("email",i[0].EMAIL),t.cookie("stat",i[0].STATISTICS),t.cookie("phone",i[0].PHONE),t.cookie("address",i[0].ADRESS),t.cookie("site",i[0].WEBPAGE_LINK),t.cookie("face",i[0].FACEBOOK_LINK),t.cookie("twitter",i[0].TWITTER_LINK),t.cookie("nif",i[0].NIF),t.redirect("/index")})}):t.render("login",{flash:"Password errada"}):t.render("login",{flash:"O utilizador inserido não existe"})})}}),module.exports=router;