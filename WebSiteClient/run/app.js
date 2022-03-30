var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var mysql      = require('mysql');
var favicon = require('serve-favicon');
var logger = require('morgan');
var nodemailer = require('nodemailer');
var app = express();

var connection = mysql.createConnection({
    multipleStatements: true,
    hostname : 'localhost',
    port: '3306',
    user     : 'root',
    password : 'root',
    database : 'id4056546_uniline'
});

connection.connect(function(err){
    if(err){
        console.log('Error connecting to Db '+ err);
        return;
    }
    console.log('Connection established');
});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'luismarqueslcc@gmail.com', // Your email id
        pass: 'Tita9800000' // Your password
    }
});

var contact = require('./routes/contactForm')
var about = require('./routes/about-us')
var index = require('./routes/index')
var order = require('./routes/order')
var signup = require('./routes/signup')
var logout = require('./routes/logout')
var account = require('./routes/account')
var signin = require('./routes/signin')
var prodef = require('./routes/prodef')
var encsuc = require('./routes/encsuc')
var home = require('./routes/home')
var indisponivel = require('./routes/indisponivel')
var orderInfo = require('./routes/orderInfo');
var produto = require('./routes/produto');




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(bodyParser.json());

app.use(favicon(path.join(__dirname, 'public','images', 'upload', 'favicon.ico')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join('./../../backofficeA/run/public/')));
app.use(function(req,res,next){
    req.connection = connection;
    next();
});
app.use(function(req,res,next){
    req.transporter = transporter;
    next();
});

app.use('/contact', contact)
app.use('/aboutUs', about)
app.use('/', index)
app.use('/order', order)
app.use('/home', home)
app.use('/orderInfo', orderInfo);
app.use('/indisponivel', indisponivel)
app.use('/signup',signup)
app.use('/signin', signin)
app.use('/account', account)
app.use('/prodef', prodef)
app.use('/logout', logout)
app.use('/encsuc', encsuc)
app.use('/produto', produto)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.locals.prettyDate = function(date)
{
    var d = date.getDate();
    var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
    var m = monthNames[date.getMonth()];
    var y = date.getFullYear();
    return d+' '+m+' '+y;
}

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

