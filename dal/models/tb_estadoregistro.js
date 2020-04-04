'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_estadoregistro = sequelize.define('tb_estadoregistro', {
    idstdregis: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  tb_estadoregistro.associate = function(models) {
    tb_estadoregistro.hasMany(models.tb_registromodulo,{
      foreignKey: 'idstdregis',
      as:'tb_registromodulo'
    });
  };
  return tb_estadoregistro;
};