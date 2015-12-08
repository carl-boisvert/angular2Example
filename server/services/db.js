var mysql      = require('mysql');

var DbManager;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});

var db = connection.connect();

DbManager.get = function () {
    return db;
}

DbManager.close = function(){
    db.end();
}

module.exports = DbManager;