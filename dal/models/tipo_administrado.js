'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tipo_administrado = sequelize.define('Tipo_administrado', {
    nombre: DataTypes.STRING
  }, {});
  Tipo_administrado.associate = function(models) {
    Tipo_administrado.hasMany(models.Administrado,{
      foreignKey: 'tipo_administradoId',
      as:'Administrado'
    });
  };
  return Tipo_administrado;
};