"use strict";

var express = require('express');

var path = require('path');

var favicon = require('serve-favicon');

var logger = require('morgan');

var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var nodemailer = require('nodemailer');

var app = express();
var router = express.Router();
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'luismarqueslcc@gmail.com',
    // Your email id
    pass: 'Tita9800000' // Your password

  }
});

var mysql = require('mysql');

var connection = mysql.createConnection({
  multipleStatements: true,
  hostname: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'id4056546_uniline'
});
connection.connect(function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Connection established');
});

var perfilAdmin = require('./routes/perfilAdmin');

var orderInfo = require('./routes/orderInfo');

var login = require('./routes/login');

var logout = require('./routes/logout');

var index = require('./routes/index');

var clients = require('./routes/clients');

var tasks = require('./routes/tasks');

var message = require('./routes/message');

var services = require('./routes/services');

var clientInf = require('./routes/clientInfo');

var taskInf = require('./routes/taskDescription');

var order = require('./routes/orders');

var importar = require('./routes/deploy');

var comp = require('./routes/compose');

var messInf = require('./routes/messageInfo');

var produto = require('./routes/produto');

var createProd = require('./routes/createProd'); // view engine setup


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug'); // uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));

connection.query("SELECT COUNT(ID_TASK) AS tamanho FROM Task WHERE STATE=0", function (error, result, client) {
  app.locals.missedMenu = result[0].tamanho;
});
connection.query("SELECT COUNT(ID_ORDER) AS ord FROM ORDEM WHERE STATUS=0", function (error, result, client) {
  app.locals.missedOrders = result[0].ord;
});
connection.query("SELECT COUNT(idMESSAGES) AS mg FROM ADMIN_MESSAGE WHERE Tipo=0 and IS_READ=1", function (error, result, client) {
  app.locals.inbox = result[0].mg;
});

app.locals.prettyDate = function (date) {
  var d = date.getDate();
  var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var m = monthNames[date.getMonth()];
  var y = date.getFullYear();
  return d + ' ' + m + ' ' + y;
};

app.locals.prettyDate2 = function (date) {
  var d = date.getDate();

  if (d < 10) {
    d = "0" + d;
  }

  var monthNames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  var m = monthNames[date.getMonth()];
  var y = date.getFullYear();
  return y + '-' + m + '-' + d;
};

app.use(favicon(path.join(__dirname, 'public', 'images', 'upload', 'favicon.ico')));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use(express["static"](path.join('./../../WebSiteClient/run/public')));
app.use(function (req, res, next) {
  req.connection = connection;
  next();
});
app.use(function (req, res, next) {
  req.transporter = transporter;
  next();
});
app.use('/perfilAdmin', perfilAdmin);
app.use('/logout', logout);
app.use('/orderInfo', orderInfo);
app.use('/', login);
app.use('/index', index);
app.use('/clients', clients);
app.use('/tasks', tasks);
app.use('/messages', message);
app.use('/taskDescription', taskInf);
app.use('/clientInfo', clientInf);
app.use('/services', services);
app.use('/orders', order);
app.use('/compose', comp);
app.use('/importar', importar);
app.use('/messageInfo', messInf);
app.use('/produto', produto);
app.use('/createProd', createProd);
app.use(express["static"](__dirname + '/public')); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;