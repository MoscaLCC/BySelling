"use strict";var express=require("express"),router=express.Router();router.get("/",function(s,i,e){if(void 0===s.cookies.deploy)i.redirect("/");else if(void 0===s.cookies.online)i.redirect("/");else{var n=s.connection;n.query("SELECT COUNT(idMESSAGES) AS mg FROM ADMIN_MESSAGE WHERE Tipo=0 and IS_READ=1",function(e,r,o){s.app.locals.inbox=r[0].mg,n.query("SELECT COUNT(ID_ORDER) AS ord FROM ORDEM WHERE STATUS=0",function(e,r,o){s.app.locals.missedOrders=r[0].ord,n.query("SELECT COUNT(ID_TASK) AS tamanho FROM Task WHERE STATE=0",function(e,r,o){s.app.locals.missedMenu=r[0].tamanho,n.query("SELECT * from ORDEM WHERE STATUS=0",function(e,r,o){ordersListMiss=r,n.query("SELECT * from ORDEM WHERE STATUS!=0",function(e,r,o){other=r,i.render("orders",{title:"Encomendas",ordersMiss:ordersListMiss,otherOrders:other,mail:s.cookies.email,nome:s.cookies.nome})})})})})})}}),router.get("/:userID",function(s,n,e){if(void 0===s.cookies.deploy)n.redirect("/");else if(void 0===s.cookies.online)n.redirect("/");else{var E=s.connection;E.query("SELECT * from ORDEM WHERE STATUS=0 and Client_NIF=?",s.params.userID,function(e,r,o){var i=r;E.query("SELECT * from ORDEM WHERE STATUS<>0 and Client_NIF=?",s.params.userID,function(e,r,o){var s=r;n.render("orders",{title:"Encomendas",ordersMiss:i,otherOrders:s})})})}}),module.exports=router;