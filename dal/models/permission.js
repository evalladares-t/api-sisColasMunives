'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    name: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    profileId: DataTypes.INTEGER,
    actionId: DataTypes.INTEGER
  }, {});
  Permission.associate = function(models) {
    /*Permission.belongsTo(models.Actions);
    Permission.belongsTo(models.Profiles);*/
  };
  return Permission;
};