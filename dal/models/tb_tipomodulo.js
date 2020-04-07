'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tipomodulo = sequelize.define('tb_tipomodulo', {
    idtmod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL TIPO DE MODULO'
    }
  }, {
    freezeTableName: true,
    comment:'TABLA MAESTRO DE LOS TIPOS DE MODULOS DEL SISTEMA'
  });
  tb_tipomodulo.associate = function(models) {
    tb_tipomodulo.hasMany(models.tb_modulo,{
      foreignKey: 'idtmod',
      as:'tb_modulo'
    });
  };
  return tb_tipomodulo;
};