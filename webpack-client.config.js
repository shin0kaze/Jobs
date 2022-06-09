const path = require('path');
const HAS_SERVER = true;

const HTMLWebpackPlugin = require('html-webpack-plugin');



module.exports = {
    mode: process.env.MODE ? process.env.MODE : 'development',
    entry: path.resolve(__dirname, 'src/client/client.js'),
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: 'client.js'
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname, 'src/index.html')})
    ],
    devServer: HAS_SERVER? undefined : {
        port: 3000,
        open: true,
        //hot: true,
        //liveReload: true,
        static: {
            directory: path.join(__dirname, "src"),
        },
    },
    devtool: 'eval'
    //watchOptions: {
    //    aggregateTimeout: 1000, // Delay the rebuilt after the first change. Value is a time in ms.
    //    poll: 1000 // bool - enable / disable polling or number - polling delay 
    //}
}
/*,--watch --progress
module: {
    rules: [{ -D html-webpack
        test: /.js?/,
        use: ['loader']
    }]
}*/
//         
//

//// --mode development