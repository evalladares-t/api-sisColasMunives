'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tipo_casuistica = sequelize.define('Tipo_casuistica', {
    nombre: DataTypes.STRING
  }, {});
  Tipo_casuistica.associate = function(models) {
    Tipo_casuistica.hasMany(models.Casuistica,{
      foreignKey: 'tipo_casuisticaId',
      as:'Casuistica'
    });
  };
  return Tipo_casuistica;
};