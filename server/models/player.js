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
        email: DataTypes.STRING,
        password: DataTypes.STRING
    },{
        tableName: 'players',
        timestamps: false,
    });
    return Player;
}