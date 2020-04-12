'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_subcasuistica = sequelize.define('tb_subcasuistica', {
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
  tb_subcasuistica.associate = function(models) {
    tb_subcasuistica.belongsTo(models.tb_prioridad,{
      foreignKey: 'idpriord',
      as:'tb_prioridad'
    });
    tb_subcasuistica.hasMany(models.tb_casuistica,{
      foreignKey: 'idscas',
      as:'tb_casuistica'
    });
  };
  return tb_subcasuistica;
};