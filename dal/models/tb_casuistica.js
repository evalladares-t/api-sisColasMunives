'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_casuistica = sequelize.define('tb_casuistica', {
    idcasuis: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING,
    idtipocasuis: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  tb_casuistica.associate = function(models) {
    tb_casuistica.hasMany(models.tb_atencion,{
      foreignKey: 'idcasuis',
      as:'tb_atencion'
    });
  };
  return tb_casuistica;
};