import express from 'express';
import { indexHTML } from './index'
const path = require('path');

const app = express();

app.get('/', (request, response) => {
    //app.use(express.static(path.join(__dirname, '../index.html')))
    let path
    response.send(indexHTML());
    //response.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => {
    console.log('App started on http://localhost:3000 at the ' + __dirname + ' directory.');
})