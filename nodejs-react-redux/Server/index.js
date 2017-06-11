import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
let app = express();

const complier = webpack(webpack(webpackConfig))
app.use(webpackMiddleware(complier, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(complier));


app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});

let IP = process.env.IP ? process.env.IP: 'localhost';
let port = process.env.PORT ? process.env.PORT: 3000;
app.listen( port, function(){
    console.log(`server is running on ${IP}:${port}`);
})