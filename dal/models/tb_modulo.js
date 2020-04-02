'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_modulo = sequelize.define('tb_modulo', {
    nom: DataTypes.STRING,
    std: DataTypes.BOOLEAN,
    idtmod: DataTypes.INTEGER
  }, {});
  tb_modulo.associate = function(models) {
    tb_modulo.hasMany(models.tb_registromodulo,{
      foreignKey: 'idmodulo',
      as:'tb_registromodulo'
    });
  };
  return tb_modulo;
};