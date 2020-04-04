'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_prioridad = sequelize.define('tb_prioridad', {
    idpriord: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING,
    val: DataTypes.INTEGER
  }, {
    freezeTableName: true
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