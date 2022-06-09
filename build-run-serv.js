const webpack = require('webpack');
const webpackCfg = require('./webpack.config');
const nodemon = require('nodemon');
const compiler = webpack(webpackCfg);
const path = require('path');

compiler.run((err) => {
    if (err) {
        console.log('Compilation failed: ', err);
    }

    compiler.watch({}, (err) => {
        if (err) {
            console.log('Compilation failed: ', err);
        }
        console.log('Compilation done.')
    })
    nodemon({
        script: path.resolve(__dirname, 'dist/server.js'),
        watch: [ 
            path.resolve(__dirname, 'dist')
        ]
    })
});