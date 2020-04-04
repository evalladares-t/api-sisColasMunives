'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_registromodulo = sequelize.define('tb_registromodulo', {
    Idrmod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    iduser: DataTypes.INTEGER,
    idmod: DataTypes.INTEGER,
    idtmpgest: DataTypes.INTEGER,
    idstdregis: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  tb_registromodulo.associate = function(models) {
    // associations can be defined here
  };
  return tb_registromodulo;
};