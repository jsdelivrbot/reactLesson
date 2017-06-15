var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res, next){
    res.sendfile(path.resolve(__dirname, 'public', 'index.html'));
})



var port = process.env.PORT ? process.env.PORT :3000;
app.listen(port, function(){
    console.log("server is running");
});