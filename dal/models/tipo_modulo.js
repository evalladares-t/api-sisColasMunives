'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tipo_modulo = sequelize.define('Tipo_modulo', {
    nombre: DataTypes.STRING
  }, {});
  Tipo_modulo.associate = function(models) {
    Tipo_modulo.hasMany(models.Modulo,{
      foreignKey: 'tipo_moduloId',
      as:'Modulo'
    });
  };
  return Tipo_modulo;
};