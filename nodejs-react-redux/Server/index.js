import express from 'express';
import path from 'path';
let app = express();

app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});

let IP = process.env.IP ? process.env.IP: 'localhost';
let port = process.env.PORT ? process.env.PORT: 3000;
app.listen( port, function(){
    console.log(`server is running on ${IP}:${port}`);
})