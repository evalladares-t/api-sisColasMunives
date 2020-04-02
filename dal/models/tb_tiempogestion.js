'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tiempogestion = sequelize.define('tb_tiempogestion', {
    fecha: DataTypes.DATE,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE
  }, {});
  tb_tiempogestion.associate = function(models) {
    tb_tiempogestion.hasMany(models.tb_registromodulo,{
      foreignKey: 'idtiempogestion',
      as:'tb_registromodulo'
    });
  };
  return tb_tiempogestion;
};