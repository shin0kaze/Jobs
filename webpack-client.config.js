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
        static: {
            directory: path.join(__dirname, "src"),
        },
    },
    devtool: 'eval'
}