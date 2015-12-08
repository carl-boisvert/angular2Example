var mysql = require('mysql');

var DbManager = {};

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    multipleStatements: true
});

var db = connection.connect();

DbManager.get = function () {
    return db;
}

DbManager.close = function(){
    db.end();
}

module.exports = DbManager;