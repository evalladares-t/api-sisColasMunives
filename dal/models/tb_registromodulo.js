'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_registromodulo = sequelize.define('tb_registromodulo', {
    iduser: DataTypes.INTEGER,
    idmodulo: DataTypes.INTEGER,
    idtiempogestion: DataTypes.INTEGER,
    idstdregis: DataTypes.INTEGER
  }, {});
  tb_registromodulo.associate = function(models) {
    // associations can be defined here
  };
  return tb_registromodulo;
};