'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_accion = sequelize.define('tb_accion', {
    nom: DataTypes.STRING,
    prov: DataTypes.INTEGER
  }, {
    comment:'Tabla de todas las acciones del sistema'
  });
  tb_accion.associate = function(models) {
    tb_accion.hasMany(models.tb_permiso,{
      foreignKey: 'idacc',
      as:'tb_permiso'
    })
  };
  return tb_accion;
};