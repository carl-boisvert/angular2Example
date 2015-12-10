var dbm = global.dbm || require('db-migrate');
var type = dbm.dataType;

exports.up = function(db, callback) {
  async.series([
    db.createTable.bind(db, "playerSocials",{
      playerId: 'int',
      facebook: 'string',
      twitter: 'string',
      youtube: 'string',
      twitch: 'string'
    }),
    db.addForeignKey.bind(db,'playerSocials', 'players',  'players_socials_foreign',
        {
          'playerId': 'id'
    }),
    db.insert.bind(db,"playerSocials",["playerId","facebook","twitter","youtube","twitch"],[1,"https://www.facebook.com/carl.boisvert.10","https://twitter.com/Carlboisvert","https://www.youtube.com/channel/UCIkEZzzSKVBOVKQqj4C_8UA","http://www.twitch.tv/cboisvert"]),
  ],callback);
};

exports.down = function(db, callback) {
  async.series([
    db.dropTable.bind(db,"playerSocials"),
  ],callback);
};
