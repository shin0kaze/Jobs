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
    //response.send(indexHTML());
    response.sendFile('index.html', { root: __dirname });
});

app.get('/promo', async (req, res) => {
    let rows = await db.getPromo().catch((err) => {console.log("Promise Rejected", err);});
    res.send(rows);
});
app.get('/posts', async (req, res) => {
    let rows = await db.getPost().catch((err) => {console.log("Promise Rejected", err);});
    res.send(rows);
});
app.get('/depts', async (req, res) => {
    let rows = await db.getDept().catch((err) => {console.log("Promise Rejected", err);});
    res.send(rows);
});
app.get('/workers', async (req, res) => {
    let rows = await db.getWorker(req.query.post, req.query.dept).catch((err) => {console.log("Promise Rejected", err);});
    console.log(rows);
    res.send(rows);
});

app.listen(3000, () => {
    console.log('App started on http://localhost:3000 at the ' + __dirname + ' directory.');
})