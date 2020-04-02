'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_usuario = sequelize.define('tb_usuario', {
    nom: DataTypes.STRING,
    apells: DataTypes.STRING,
    dni: DataTypes.STRING,
    user: DataTypes.STRING,
    pass: DataTypes.STRING,
    imgurl: DataTypes.STRING,
    std: DataTypes.BOOLEAN,
  }, {});
  tb_usuario.associate = function(models) {
    tb_usuario.hasMany(models.tb_multimedia,{
      foreignKey: 'iduser',
      as:'tb_multimedia'
    });
    tb_usuario.hasMany(models.tb_registromodulo,{
      foreignKey: 'iduser',
      as:'tb_registromodulo'
    });
    tb_usuario.hasMany(models.tb_atencion,{
      foreignKey: 'iduser',
      as:'tb_atencion'
    });
  };
  return tb_usuario;
};