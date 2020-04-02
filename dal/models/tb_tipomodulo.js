'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tipomodulo = sequelize.define('tb_tipomodulo', {
    nom: DataTypes.STRING
  }, {});
  tb_tipomodulo.associate = function(models) {
    tb_tipomodulo.hasMany(models.tb_modulo,{
      foreignKey: 'idtipmod',
      as:'tb_modulo'
    });
  };
  return tb_tipomodulo;
};