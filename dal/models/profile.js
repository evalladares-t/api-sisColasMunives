'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profile = sequelize.define('Profile', {
    name: DataTypes.STRING
  }, {});
  Profile.associate = function(models) {
    Profile.hasMany(models.Permission,{
      foreignKey: 'profileId',
      as:'Permission'
    });
    Profile.hasMany(models.User,{
      foreignKey: 'profileId',
      as:'User'
    });
  };
  return Profile;
};