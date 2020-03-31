'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado_atencion = sequelize.define('Estado_atencion', {
    nombre: DataTypes.STRING
  }, {});
  Estado_atencion.associate = function(models) {
    Estado_atencion.hasMany(models.Atencion,{
      foreignKey: 'estado_atencionId',
      as:'Atencion'
    })
  };
  return Estado_atencion;
};