'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_estadoregistro = sequelize.define('tb_estadoregistro', {
    idstdregis: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment: 'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL ESTADO DEL REGISTRO'
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LOS ESTADOS DE REGISTRO DE LOS MODULOS DEL SISTEMA'
  });
  tb_estadoregistro.associate = function(models) {
    tb_estadoregistro.hasMany(models.tb_registromodulo,{
      foreignKey: 'idstdregis',
      as:'tb_registromodulo'
    });
  };
  return tb_estadoregistro;
};