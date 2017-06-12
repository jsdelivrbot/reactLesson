import path from 'path';
import webpack from 'webpack';
export default {
    devtool: 'eval-source-map',
    entry: {
        
        main: ['webpack-hot-middleware/client' , path.join(__dirname, '/client/index.js')]
    },
        
    output: {
        path: '/',
        // filename: 'bundle.js'
        publicPath: '/'
    },
    plugins:[
         new webpack.NoEmitOnErrorsPlugin(),
         new webpack.HotModuleReplacementPlugin()
     ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader', 'babel-loader']
            }
        ]
    }
    
}