'use strict';
module.exports = (sequelize, DataTypes) => {
  const Multimedia = sequelize.define('Multimedia', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Multimedia.associate = function(models) {
    // associations can be defined here
  };
  return Multimedia;
};