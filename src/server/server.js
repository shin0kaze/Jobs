import express from 'express';
import { indexHTML } from './index';
const path = require('path');
import * as db from './sql';


const app = express();
app.use('/static', express.static(path.join(__dirname,'public')));

app.get('/', (request, response) => {
    console.log(path.join(__dirname,'public') +' <- public');
     // '../index.html')
    //response.send(db.getAll());
    response.send(indexHTML());
    //response.sendFile('index.html', { root: __dirname });
});

app.listen(3000, () => {
    console.log('App started on http://localhost:3000 at the ' + __dirname + ' directory.');
})