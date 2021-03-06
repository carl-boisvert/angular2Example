"use strict";
var bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    var Player = sequelize.define('Player',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        gamertag: {
            type: DataTypes.STRING,
            unique: true
        },
        number: DataTypes.INTEGER,
        email:{
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING,
        salt: DataTypes.STRING,
        facebook: {
            type: DataTypes.STRING,
            unique: true
        },
        twitter: {
            type: DataTypes.STRING,
            unique: true
        },
        youtube: {
            type: DataTypes.STRING,
            unique: true
        },
        twitch: {
            type: DataTypes.STRING,
            unique: true
        },
    },{
        tableName: 'players',
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Player.belongsTo(models.Team);
            }
        },
        instanceMethods: {
            validPassword: function (password) {
                //password = bcrypt.hashSync(password, this.salt);
                console.log(password);
                console.log(bcrypt.compareSync(password, this.password));
                return bcrypt.compareSync(password, this.password);
            },
            createPassword: function(password){
                this.salt = bcrypt.genSaltSync();
                this.password = bcrypt.hashSync(password, this.salt);
            },
        }
    });
    return Player;
}