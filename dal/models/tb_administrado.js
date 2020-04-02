'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_administrado = sequelize.define('tb_administrado', {
    nom: DataTypes.STRING,
    apells: DataTypes.STRING,
    dni: DataTypes.STRING,
    codrentas: DataTypes.STRING,
    idtipoadm: DataTypes.INTEGER
  }, {});
  tb_administrado.associate = function(models) {
    tb_administrado.hasMany(models.tb_ticket,{
      foreignKey: 'idadmin',
      as:'tb_ticket'
    });
  };
  return tb_administrado;
};