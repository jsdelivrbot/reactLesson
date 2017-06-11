import express from 'express';

let app = express();

app.get('/*', (req, res, next)=>{
    res.send('hello');
});

let IP = process.env.IP ? process.env.IP: 'localhost';
let port = process.env.PORT ? process.env.PORT: 3000;
app.listen( port, function(){
    console.log(`server is running on ${IP}:${port}`);
})