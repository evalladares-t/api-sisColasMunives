'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_ticket = sequelize.define('tb_ticket', {
    nom: DataTypes.STRING,
    idfranjhor: DataTypes.INTEGER,
    idadmin: DataTypes.INTEGER,
    idpriord: DataTypes.INTEGER
  }, {});
  tb_ticket.associate = function(models) {
    tb_ticket.hasMany(models.tb_atencion,{
      foreignKey: 'idticket',
      as:'tb_atencion'
    });
  };
  return tb_ticket;
};