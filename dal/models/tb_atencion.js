'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_atencion = sequelize.define('tb_atencion', {
    idatenc: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    descrip: {
      type:DataTypes.STRING,
      comment:'DESCRIPCION DE LA ATENCION'
    },
    deriva: {
      type:DataTypes.INTEGER,
      allowNull:true,
      comment:'SI DERIVA DE OTRA ATENCION (PUEDE SER NULO)'
    },
    idstdaten: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA ESTADO DE ATENCION',
    },
    idcasuis: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA CASUISTICA',
    },
    idtick: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA TICKET',
    },
    iduser: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA USUARIO',
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LA ATENCION DEL SISTEMA'
  });
  tb_atencion.associate = function(models) {
    tb_atencion.belongsTo(models.tb_estadoatencion,{
      foreignKey: 'idstdaten',
      as:'tb_estadoatencion'
    });
    tb_atencion.belongsTo(models.tb_casuistica,{
      foreignKey: 'idcasuis',
      as:'tb_casuistica'
    });
    tb_atencion.belongsTo(models.tb_ticket,{
      foreignKey: 'idtick',
      as:'tb_ticket'
    });
    tb_atencion.belongsTo(models.tb_usuario,{
      foreignKey: 'iduser',
      as:'tb_usuario'
    });
  };
  return tb_atencion;
};