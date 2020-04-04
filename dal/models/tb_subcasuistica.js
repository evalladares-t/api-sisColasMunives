'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_tipocasuistica = sequelize.define('tb_tipocasuistica', {
    idscas: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING,
    idpriord: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  tb_tipocasuistica.associate = function(models) {
    // associations can be defined here
  };
  return tb_tipocasuistica;
};