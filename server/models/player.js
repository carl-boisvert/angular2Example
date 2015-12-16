"use strict";

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
        }
    },{
        tableName: 'players',
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Player.belongsTo(models.Team);
            }
        }
    });
    return Player;
}