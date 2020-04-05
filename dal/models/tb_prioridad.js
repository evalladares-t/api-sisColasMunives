'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_prioridad = sequelize.define('tb_prioridad', {
    idpriord: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DE LA PRIORIDAD'
    },
    val: {
      type:DataTypes.INTEGER,
      comment:'VALOR DE LA PRIORIDAD'
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LA PRIORIDAD DEL SISTEMA'
  });
  tb_prioridad.associate = function(models) {
    tb_prioridad.hasMany(models.tb_ticket,{
      foreignKey: 'idpriord',
      as:'tb_ticket'
    });
    tb_prioridad.hasMany(models.tb_tipocasuistica,{
      foreignKey: 'idpriord',
      as:'tb_tipocasuistica'
    });
  };
  return tb_prioridad;
};