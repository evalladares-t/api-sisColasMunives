'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_modulo = sequelize.define('tb_modulo', {
    idmod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    nom: DataTypes.STRING,
    std: DataTypes.BOOLEAN,
    idtmod: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  tb_modulo.associate = function(models) {
    tb_modulo.hasMany(models.tb_registromodulo,{
      foreignKey: 'idmodulo',
      as:'tb_registromodulo'
    });
  };
  return tb_modulo;
};