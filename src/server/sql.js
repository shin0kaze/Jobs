const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const DB_PATH = path.join(__dirname, 'database.db');

const con = new sqlite3.Database(DB_PATH, (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Database connected at ${DB_PATH} directory.`);
});

con.serialize(() => {
    con.all("select * from worker", (err, row) => {
        if (err) {
            return console.error(err.message);
        }
    });
});


async function getPost() {
    return new Promise(function (resolve, reject) {
        con.all('select * from post', function (err, rows) {
            if (err) { return reject(err); }
            resolve(rows);
        });
    });
}

async function getDept() {
    return new Promise(function (resolve, reject) {
        con.all('select * from dept', function (err, rows) {
            if (err) { return reject(err); }
            resolve(rows);
        });
    });
}

async function getWorker(post, dept) {
    return new Promise(function (resolve, reject) {
        let where = whereClause(post, dept);
        let query = `select * from \`worker\`${where};`;
        console.log(query);
        con.all(query, function (err, rows) {
            if (err) { return reject(err); }
            resolve(rows);
        });
    });
}

async function getPromo() {
    return new Promise(function (resolve, reject) {
        con.all('select * from promotion', function (err, rows) {
            if (err) { return reject(err); }
            resolve(rows);
        });
    });
}

function whereClause(post, dept) {
    let where = '', post_cond = '', dept_cond = '', and = '';
    if (post || dept) where = ' where ';
    if (post) post_cond = ' post_name = ? ';
    if (dept) dept_cond = ' dept_name = ? ';
    if (post && dept) and = ' and ';
    return where + post_cond + and + dept_cond;
}
export { getPromo, getDept, getPost, getWorker };