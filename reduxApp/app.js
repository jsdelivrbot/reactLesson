var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//================================= API ================================
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/bookShop');
import BookModel from'./models/book';
mongoose.Promise = global.Promise;

app.post('/api/books', async function(req, res){
  console.log('go here');
  try {
    if(req.body.books){
      BookModel.create(req.body.books,(err, books)=>{
        if(err){
          console.log(err);
          throw err;
        }
        else {
          res.json({
            message: "success",
            books: books
          })
        }
      })
      
    }
  }
  catch(err){
    console.log(err);
    throw err;
  }
});

app.get('/api/books', async function(req, res){
  try {
    let books = await BookModel.find({});
    res.json({
      message: "success",
      books: books
    })
  }
  catch(err){
    console.log(err);
    throw err;
  }
})

app.delete('/api/books/:_id', async function(req, res){
  try {
    console.log("req.params._id ", req.params._id)
    var query = {
      _id: req.params._id
    }
    BookModel.remove(query, (err)=>{
      if(err){
        console.log(err);
        throw err;
      }
      res.json({
        message: "success",
      })
    });    
  }
  catch(err){
    console.log(err);
    throw err;
  }
})
app.put('/api/books/:_id', function(req, res){
  var book = req.body.book;
  var query = req.params._id;
  var update = {
    '$set': {
      title: book.title,
      description: book.description,
      price: book.price,
      image: book.image
    }
  };
  var options = {new: true};
  BookModel.findByIdAndUpdate(query, update, options, function(err, books){
    if(err){
      console.log(err);
      throw err;
    }
    res.json(books);
  })
})
//================================= API ================================
app.get('*', function(req, res, next){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})


app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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
