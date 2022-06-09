const path = require('path');
const nodeExternals = require('webpack-node-externals'); 

module.exports = {
    mode: process.env.MODE ? process.env.MODE : 'development',
    target: "node",
    entry: path.resolve(__dirname, 'src/server/server.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },
    externals: [nodeExternals()]
}