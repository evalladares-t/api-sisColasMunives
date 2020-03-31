'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accion = sequelize.define('Accion', {
    nombre: DataTypes.STRING,
    dueño: DataTypes.INTEGER
  }, {});
  Accion.associate = function(models) {
    Accion.hasMany(models.Permiso,{
      foreignKey: 'accionId',
      as:'Permiso'
    })
  };
  return Accion;
};