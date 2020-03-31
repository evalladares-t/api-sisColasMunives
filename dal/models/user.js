'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dni: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    imageurl: DataTypes.STRING,
    state: DataTypes.BOOLEAN,
    profileId: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Multimedia,{
      foreignKey: 'userId',
      as:'Multimedia'
    });
  };
  return User;
};