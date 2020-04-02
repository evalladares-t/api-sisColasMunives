'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_estadoregistro = sequelize.define('tb_estadoregistro', {
    nom: DataTypes.STRING
  }, {});
  tb_estadoregistro.associate = function(models) {
    tb_estadoregistro.hasMany(models.tb_registromodulo,{
      foreignKey: 'idstdregis',
      as:'tb_registromodulo'
    });
  };
  return tb_estadoregistro;
};