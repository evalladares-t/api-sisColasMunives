'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_usuario = sequelize.define('tb_usuario', {
    iduser: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL USUARIO'
    },
    apells: {
      type: DataTypes.STRING,
      comment:'APELLIDOS DEL USUARIO'
    },
    dni: {
      type : DataTypes.STRING,
      comment:'DNI DEL USUARIO'
    },
    user: {
      type: DataTypes.STRING,
      comment:'USERNAME DEL USUARIO PARA INGRESAR AL SISTEMA'
    },
    pass: {
      type: DataTypes.STRING,
      comment:'PASSWORD DEL USUARIO PARA INGRESAR AL SISTEMA'
    },
    imgurl: {
      type:DataTypes.STRING,
      allowNull:true,
      comment:'DIRECCION URL DE LA FOTO DEL USUARIO'
    },
    std: {
      type:DataTypes.BOOLEAN,
      comment:'ESTADO 1=ACTIVO  0= DESCATIVADO'
    },
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LOS USUARIOS DEL SISTEMA'
  });
  tb_usuario.associate = function(models) {
    tb_usuario.hasMany(models.tb_multimedia,{
      foreignKey: 'iduser',
      as:'tb_multimedia'
    });
    tb_usuario.hasMany(models.tb_registromodulo,{
      foreignKey: 'iduser',
      as:'tb_registromodulo'
    });
    tb_usuario.hasMany(models.tb_atencion,{
      foreignKey: 'iduser',
      as:'tb_atencion'
    });
  };
  return tb_usuario;
};