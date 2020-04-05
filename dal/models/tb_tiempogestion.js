'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tiempogestion = sequelize.define('tb_tiempogestion', {
    idtmpgest: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment: 'IDENTIFICADOR UNICO'
    },
    fecha: {
      type:DataTypes.DATE,
      comment:'FECHA (DIA) QUE INICIA LA GESTION'
    },
    inicio: {
      type:DataTypes.DATE,
      comment:'HORA QUE INICIA LA GESTION'
    },
    fin: {
      type:DataTypes.DATE,
      allowNull:true,
      comment:'HORA QUE TERMINA LA GESTION'
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DEL TIEMPO DE GESTION DEL SISTEMA'
  });
  tb_tiempogestion.associate = function(models) {
    tb_tiempogestion.hasMany(models.tb_registromodulo,{
      foreignKey: 'idtiempogestion',
      as:'tb_registromodulo'
    });
  };
  return tb_tiempogestion;
};