const mysql = require('mysql');
const Db = require('../bd/Db');

const Connection=mysql.createConnection({
    host:Db.HOST,
    port:Db.PORT,
    user:Db.USER,
    password:Db.PASSWORD,
    database:Db.DATABASE
})
module.exports=Connection;