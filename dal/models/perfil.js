'use strict';
module.exports = (sequelize, DataTypes) => {
  const Perfil = sequelize.define('Perfil', {
    nombre: DataTypes.STRING
  }, {});
  Perfil.associate = function(models) {
    Perfil.hasMany(models.Permiso,{
      foreignKey: 'perfilId',
      as:'Permiso'
    });
    Perfil.hasMany(models.Usuario,{
      foreignKey: 'perfilId',
      as:'Usuario'
    });
  };
  return Perfil;
};