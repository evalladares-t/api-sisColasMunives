'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tipoadministrado = sequelize.define('tb_tipoadministrado', {
    nom: DataTypes.STRING
  }, {});
  tb_tipoadministrado.associate = function(models) {
    tb_tipoadministrado.hasMany(models.tb_administrado,{
      foreignKey: 'idtipoadm',
      as:'tb_administrado'
    });
  };
  return tb_tipoadministrado;
};