'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tipocasuistica = sequelize.define('tb_tipocasuistica', {
    nom: DataTypes.STRING,
    idpriord: DataTypes.INTEGER
  }, {});
  tb_tipocasuistica.associate = function(models) {
    // associations can be defined here
  };
  return tb_tipocasuistica;
};