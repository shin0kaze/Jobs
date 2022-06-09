const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const DB_PATH = path.join(__dirname, 'database.db');

const con = new sqlite3.Database(DB_PATH, (err) => {
    if(err) {
        return console.error(err.message);
    }
    console.log(`Database connected at ${DB_PATH} directory.`);
});

//sss
con.serialize(() => {
    con.all("select * from worker", (err, row) => {
        if(err) {
            return console.error(err.message);
        }
        //console.log(row);
    });
});

function getAll() {}

export {getAll};