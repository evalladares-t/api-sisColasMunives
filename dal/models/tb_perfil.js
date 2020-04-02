'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_perfil = sequelize.define('tb_perfil', {
    nom: DataTypes.STRING
  }, {});
  tb_perfil.associate = function(models) {
    tb_perfil.hasMany(models.tb_permiso,{
      foreignKey: 'idperf',
      as:'tb_permiso'
    });
    tb_perfil.hasMany(models.tb_usuario,{
      foreignKey: 'idperf',
      as:'tb_usuario'
    });
  };
  return tb_perfil;
};