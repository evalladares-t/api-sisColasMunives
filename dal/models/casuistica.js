'use strict';
module.exports = (sequelize, DataTypes) => {
  const Casuistica = sequelize.define('Casuistica', {
    nombre: DataTypes.STRING,
    prioridadId: DataTypes.INTEGER,
    tipo_casuisticaId: DataTypes.INTEGER
  }, {});
  Casuistica.associate = function(models) {
    Casuistica.hasMany(models.Atencion,{
      foreignKey: 'casuisticaId',
      as:'Atencion'
    })
  };
  return Casuistica;
};