'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_multimedia = sequelize.define('tb_multimedia', {
    idmultim: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL ARCHIVO MULTIMEDIA'
    },
    url: {
      type:DataTypes.STRING,
      comment:'DIRECCION URL DEL ARCHIVO MULTIMEDIA'
    },
    iduser: {
      type: DataTypes.INTEGER,
      comment: 'IDENTIFICADOR TABLA USUARIO',
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LOS ARCHIVOS MULTIMEDIA DEL SISTEMA'
  });
  tb_multimedia.associate = function(models) {
    // associations can be defined here
  };
  return tb_multimedia;
};