'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_registromodulo = sequelize.define('tb_registromodulo', {
    Idrmod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    iduser: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA USUARIO',
    },
    idmod: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA MODULO',
    },
    idtmpgest: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA TIEMPO GESTION',
    },
    idstdregis: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA ESTADO DE REGISTRO',
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LOS REGISTRO DEL MODULO DEL SISTEMA'
  });
  tb_registromodulo.associate = function(models) {
    // associations can be defined here
  };
  return tb_registromodulo;
};