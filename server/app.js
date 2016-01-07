require('dotenv').load();
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');
var passport = require('passport');
var models = require('./models');
var JwtStrategy = require('passport-jwt').Strategy;

var sequelize = new Sequelize('database', 'username', 'password', {
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  multipleStatements: true,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

  // SQLite only
  storage: 'path/to/database.sqlite'
});

// Models degini
var routes = require('./routes/index');
var teams = require('./routes/teams');
var players = require('./routes/players');
var notifications = require('./routes/notifications');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/login',
    passport.authenticate('jwt',{session:false}),
    function(req, res) {
      // If this function gets called, authentication was successful.
      // `req.user` contains the authenticated user.
      res.redirect('/users/' + req.user.username);
    });


var opts = {}
opts.secretOrKey = 'secret';
opts.issuer = "accounts.examplesoft.com";
opts.audience = "yoursite.net";
passport.use(new JwtStrategy(
    opts,
    function(jwt_payload, done) {
      console.log(jwt_payload);
      models.Player.findOne({ where: {gamertag: username }}).then(function (user) {
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        console.log("LOGGEDIN");
        return done(null, user);
      }).catch(function(err) {
        console.log(err);
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
      });
    }
));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use('/', routes);
app.use('/teams', teams);
app.use('/players', players);
app.use('/notifications',notifications);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    console.log("ERROR");
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.log(err);
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;
