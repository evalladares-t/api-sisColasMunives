'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tipocasuistica = sequelize.define('tb_tipocasuistica', {
    idscas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL TIPO DE CASUISTICA'
    },
    idpriord: {
      type:DataTypes.INTEGER,
      comment: 'IDENTIFICADOR TABLA PRIORIDAD',
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DEL TIPO DE SUB CASUISTICA DEL SISTEMA'
  });
  tb_tipocasuistica.associate = function(models) {
    // associations can be defined here
  };
  return tb_tipocasuistica;
};