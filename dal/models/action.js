'use strict';
module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define('Action', {
    name: DataTypes.STRING,
    owner: DataTypes.INTEGER
  }, {});
  Action.associate = function(models) {
    Action.hasMany(models.Permission,{
      foreignKey: 'actionId',
      as:'Permission'
    })
  };
  return Action;
};