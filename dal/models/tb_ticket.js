'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_ticket = sequelize.define('tb_ticket', {
    idtick: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING,
    idfranjhor: DataTypes.INTEGER,
    idpriord: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  tb_ticket.associate = function(models) {
    tb_ticket.hasMany(models.tb_atencion,{
      foreignKey: 'idtick',
      as:'tb_atencion'
    });
  };
  return tb_ticket;
};