"use strict";

module.exports = function(sequelize, DataTypes) {
    var Team = sequelize.define('Team',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            unique: true
        }
    },{
        tableName: 'players',
        timestamps: false,
        classMethods: {
            associate: function(models) {
                Team.hasMany(models.Player);
            }
        }
    });
    return Team;
}