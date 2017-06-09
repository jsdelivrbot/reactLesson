var express = require('express');
var session = require('express-session');

var indexRouter = require('./routes/indexRouter');
var baihocRouter = require('./routes/baihocRouter');

var config = require('./config/indexConfig');
var app = express();

config(app);

app.use('/', indexRouter);
app.use('/baihoc', baihocRouter);

app.listen(process.env.PORT, process.env.IP, function(err){
    if(err) console.log(err);
    console.log("i am running");
})