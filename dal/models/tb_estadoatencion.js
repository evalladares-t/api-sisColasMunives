'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_estadoatencion = sequelize.define('tb_estadoatencion', {
    idstdaten: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL ESTADO DE LA ATENCION'
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DEL ESTADO DE ATENCION DEL SISTEMA'
  });
  tb_estadoatencion.associate = function(models) {
    tb_estadoatencion.hasMany(models.tb_atencion,{
      foreignKey: 'idstdaten',
      as:'tb_atencion'
    });
  };
  return tb_estadoatencion;
};