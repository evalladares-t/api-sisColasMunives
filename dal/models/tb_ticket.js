'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_ticket = sequelize.define('tb_ticket', {
    idtick: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL TICKET'
    },
    idfranjhor: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA FRANJA HORARIA',
    },
    idpriord: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA PRIORIDAD',
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DEL TICKET GENERADO DEL SISTEMA'
  });
  tb_ticket.associate = function(models) {
    tb_ticket.hasMany(models.tb_atencion,{
      foreignKey: 'idtick',
      as:'tb_atencion'
    });
    tb_ticket.belongsTo(models.tb_franjahoraria,{
      foreignKey: 'idfranjhor',
      as:'tb_franjahoraria'
    });
    tb_ticket.belongsTo(models.tb_prioridad,{
      foreignKey: 'idpriord',
      as:'tb_prioridad'
    });
  };
  return tb_ticket;
};