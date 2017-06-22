
var compression = require('compression');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
import ejs from 'ejs';
var index = require('./routes/index');
var users = require('./routes/users');
import {GetBooks, RequestHandler} from'./requestHandler';
var app = express();
app.use(compression());
import session from 'express-session';
import connectMongo from 'connect-mongo';
const MongoStore = connectMongo(session);
const db = mongoose.connection;
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//===========>>>>>setup session<<<<<===================================
app.use(session({
  secret: 'son cat tuong secret',
  saveUninitialized: false,
  resave: false,
  store: new MongoStore({mongooseConnection: db, ttl: 2*24*60*60})
}))

//===========>>>>> END setup session<<<<<================================

//================================= API ================================
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost:27017/bookShop');
import BookModel from'./models/book';
import caculateCart from './shared/caculateCart';
import fs from 'fs';
mongoose.Promise = global.Promise;

app.get('/api/images', function(req, res){
  const imageFolder = __dirname + '/public/images';
  fs.readdir(imageFolder, function(err, files){
    if(err){
      return console.log(err);
    }
    let filesArr = [];
    let count = 1;
    files.forEach(function(file){
      filesArr.push({
        name:file
      });
      count++;
    });
    res.json({images: filesArr})
  })
})

app.post('/api/cart', function(req, res){
  let cart = req.body.cart;
  cart.totalAmount = caculateCart(cart.cartItems).totalAmount;
  cart.totalQty = caculateCart(cart.cartItems).totalQty;
  req.session.cart = cart;
  req.session.save(function(err){
    if(err){
      throw err;
    }
    res.json({
      message: "success",
      cart: req.session.cart
    })
  })
});

app.get('/api/cart', function(req, res, next){
 if(req.session.cart) {
   res.json({
     cart: req.session.cart
    });
 }
 else {
  
 next();
 }
});


app.post('/api/books', async function(req, res){
  try {
    if(req.body.books){
      BookModel.create(req.body.books,(err, books)=>{
        if(err){
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
  let data = await GetBooks();
  res.json(data);
})

app.delete('/api/books/:_id', async function(req, res){
  try {
    // console.log("req.params._id ", req.params._id)
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
app.use( RequestHandler);

// app.get('*', function(req, res, next){
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// })


// app.use('/', index);
// app.use('/users', users);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
