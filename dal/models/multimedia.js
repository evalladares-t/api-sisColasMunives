'use strict';
module.exports = (sequelize, DataTypes) => {
  const Multimedia = sequelize.define('Multimedia', {
    nombre: DataTypes.STRING,
    url: DataTypes.STRING,
    usuarioId: DataTypes.INTEGER
  }, {});
  Multimedia.associate = function(models) {
    // associations can be defined here
  };
  return Multimedia;
};