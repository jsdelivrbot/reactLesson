var express = require('express');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var expressHbs = require('express-handlebars');
// var mongoose = require('mongoose');
// var session = require('express-session');
// var connectMongo = require('connect-mongo')(session);

module.exports = function(app){
    app.use(express.static("public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.engine('.hbs', expressHbs({defaultLayout: "layouts", extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.use(flash());
    // require('./connectConfig');
    // app.use(session({
    //   secret: "nguyenthanhtung", 
    //   resave: false, 
    //   saveUninitialized: false,
    //   store: new connectMongo({ mongooseConnection: mongoose.connection }),
    //   cookie: { maxAge: 24*60*60 * 1000 }//24 gio x 60 phut x 60 giay x1000 mili giay = 1 ngay
    // }));
    
    
    
}