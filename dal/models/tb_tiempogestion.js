'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tiempogestion = sequelize.define('tb_tiempogestion', {
    idtmpgest: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    fecha: DataTypes.DATE,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE
  }, {
    freezeTableName: true
  });
  tb_tiempogestion.associate = function(models) {
    tb_tiempogestion.hasMany(models.tb_registromodulo,{
      foreignKey: 'idtiempogestion',
      as:'tb_registromodulo'
    });
  };
  return tb_tiempogestion;
};