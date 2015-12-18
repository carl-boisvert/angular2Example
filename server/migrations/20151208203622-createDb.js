var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;
var async = require('async');

exports.up = function(db, callback) {
  async.series([
    db.createTable.bind(db, "players",{
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      gamertag: 'string',
      number: 'int',
      email: 'string',
      password: 'string',
      salt: 'string',
      teamId: 'int',
      facebook: 'string',
      twitter: 'string',
      youtube: 'string',
      twitch: 'string'
    }),
    db.createTable.bind(db, "teams",{
      id: { type: 'int', primaryKey: true, autoIncrement: true },
      name: 'string'
    }),
    db.addForeignKey.bind(db,'players', 'teams', 'teams_players_foreign',
        {
          'teamId': 'id'
    }),
    db.insert.bind(db,"teams",["name"],["Critical assets"]),
    db.insert.bind(db,"teams",["name"],["Critical elements"]),
    db.insert.bind(db,"players",["gamertag", "number", "teamId","facebook","twitter","youtube","twitch"],["amnesiaguy", 7,1,"https://www.facebook.com/carl.boisvert.10","https://twitter.com/Carlboisvert","https://www.youtube.com/channel/UCIkEZzzSKVBOVKQqj4C_8UA","http://www.twitch.tv/cboisvert"]),
    db.insert.bind(db,"players",["gamertag", "number", "teamId"],["pleonator", 13,1]),
    db.insert.bind(db,"players",["gamertag", "number", "teamId"],["chico", 15,1]),
    db.insert.bind(db,"players",["gamertag", "number", "teamId"],["Raf", 17,1]),
    db.insert.bind(db,"players",["gamertag", "number", "teamId"],["Owlsome", 11,2]),
    db.insert.bind(db,"players",["gamertag", "number", "teamId"],["Akaangel69", 9,2]),
    db.insert.bind(db,"players",["gamertag", "number", "teamId"],["Akinzee", 18,2])
  ],callback);

};

exports.down = function(db, callback) {
  async.series([
    db.dropTable.bind(db,"players"),
    db.dropTable.bind(db,"teams")
  ],callback);
};
