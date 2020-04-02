'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_estadoatencion = sequelize.define('tb_estadoatencion', {
    nom: DataTypes.STRING
  }, {});
  tb_estadoatencion.associate = function(models) {
    tb_estadoatencion.hasMany(models.tb_atencion,{
      foreignKey: 'idstdatenc',
      as:'tb_atencion'
    });
  };
  return tb_estadoatencion;
};