'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_multimedia = sequelize.define('tb_multimedia', {
    nom: DataTypes.STRING,
    url: DataTypes.STRING,
    iduser: DataTypes.INTEGER
  }, {});
  tb_multimedia.associate = function(models) {
    // associations can be defined here
  };
  return tb_multimedia;
};