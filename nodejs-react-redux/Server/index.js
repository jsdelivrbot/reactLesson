import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware'
import webpackConfig from '../webpack.config.dev';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';


let app = express();

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot:true,
    noInfo: true, 
    publicPath: webpackConfig.output.publicPath,
    contentBase: '/'
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(path.resolve('server')));
app.use(bodyParser.json());
function validateInput(data){
    let errors = {};

    if(isEmpty(data.username)){
        errors.username = "bạn chưa nhập dữ liệu cho trường này";
    }
    if(isEmpty(data.email)){
        errors.email = "bạn chưa nhập dữ liệu cho trường này";
    }
    if(!Validator.isEmail){
        errors.email = "Chưa đúng định dạng email";
    }
    if(isEmpty(data.password)){
        errors.password = "bạn chưa nhập dữ liệu cho trường này";
    }
    if(!Validator.equals(data.password, data.passwordConfirm)){
        errors.password = "Mật khẩu và nhập lại mật khẩu phải trùng nhau";
    }
    if(isEmpty(data.gender)){
        errors.gender = "bạn chưa nhập dữ liệu cho trường này";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }

}
app.post('/api/users', function(req, res, next){
    const{errors, isValid} = validateInput(req.body.user);
    if(!isValid){
        res.status(400).json(errors);
    }
    else {
        res.json({
            message: "success",
            user: req.body.user
        });
    }
});




app.get('/*', (req, res, next)=>{
    res.sendFile(path.join(__dirname, './index.html'));
});

let IP = process.env.IP ? process.env.IP: 'localhost';
let port = process.env.PORT ? process.env.PORT: 3000;
app.listen( port, function(){
    console.log(`server is running on ${IP}:${port}`);
})