'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permiso = sequelize.define('Permiso', {
    nombre: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    perfilId: DataTypes.INTEGER,
    accionId: DataTypes.INTEGER
  }, {});
  Permiso.associate = function(models) {
    // associations can be defined here
  };
  return Permiso;
};