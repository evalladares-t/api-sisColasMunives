'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_estadoatencion = sequelize.define('tb_estadoatencion', {
    idstdaten: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  tb_estadoatencion.associate = function(models) {
    tb_estadoatencion.hasMany(models.tb_atencion,{
      foreignKey: 'idstdaten',
      as:'tb_atencion'
    });
  };
  return tb_estadoatencion;
};