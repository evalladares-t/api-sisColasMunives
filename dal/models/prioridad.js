'use strict';
module.exports = (sequelize, DataTypes) => {
  const Prioridad = sequelize.define('Prioridad', {
    nombre: DataTypes.STRING,
    valor: DataTypes.INTEGER
  }, {});
  Prioridad.associate = function(models) {
    Prioridad.hasMany(models.Casuistica,{
      foreignKey: 'prioridadId',
      as:'Casuistica'
    });
    Prioridad.hasMany(models.Ticket,{
      foreignKey: 'prioridadId',
      as:'Ticket'
    });
  };
  return Prioridad;
};