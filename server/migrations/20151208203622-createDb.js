var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;
var async = require('async');

exports.up = function(db, callback) {
  async.series([
    db.createTable.bind(db, "players",{
      id: { type: 'int', primaryKey: true },
      gamertag: 'string',
      email: 'string',
      password: 'string'
    }),
    db.createTable.bind(db, "teams",{
      id: { type: 'int', primaryKey: true },
      name: 'string'
    })
  ],callback);

};

exports.down = function(db, callback) {
  async.series([
    db.dropTable.bind(db,"players"),
    db.dropTable.bind(db,"teams")
  ],callback);
};
