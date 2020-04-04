'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_multimedia = sequelize.define('tb_multimedia', {
    idmultim: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING,
    url: DataTypes.STRING,
    iduser: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  tb_multimedia.associate = function(models) {
    // associations can be defined here
  };
  return tb_multimedia;
};