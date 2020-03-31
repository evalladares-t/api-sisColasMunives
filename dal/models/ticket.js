'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    nombre: DataTypes.STRING,
    prioridadId:DataTypes.INTEGER,
    franja_horariaId: DataTypes.INTEGER,
    administradoId: DataTypes.INTEGER
  }, {});
  Ticket.associate = function(models) {
    Ticket.hasMany(models.Atencion,{
      foreignKey: 'ticketId',
      as:'Atencion'
    })
  };
  return Ticket;
};