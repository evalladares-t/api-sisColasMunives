'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_permiso = sequelize.define('tb_permiso', {
    nom: DataTypes.STRING,
    std: DataTypes.BOOLEAN,
    idperf: DataTypes.INTEGER,
    idacc: DataTypes.INTEGER
  }, {});
  tb_permiso.associate = function(models) {
    // associations can be defined here
  };
  return tb_permiso;
};