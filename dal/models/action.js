'use strict';
module.exports = (sequelize, DataTypes) => {
  const Action = sequelize.define('Action', {
    name: DataTypes.STRING,
    owner: DataTypes.INTEGER
  }, {});
  Action.associate = function(models) {
    // associations can be defined here
  };
  return Action;
};