'use strict';
module.exports = (sequelize, DataTypes) => {
  const Franja_horaria = sequelize.define('Franja_horaria', {
    fecha: DataTypes.STRING,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE,
    estado: DataTypes.BOOLEAN
  }, {});
  Franja_horaria.associate = function(models) {
    Franja_horaria.hasMany(models.Ticket,{
      foreignKey: 'franja_horariaId',
      as:'Ticket'
    })
  };
  return Franja_horaria;
};