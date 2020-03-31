'use strict';
module.exports = (sequelize, DataTypes) => {
  const Modulo = sequelize.define('Modulo', {
    nombre: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    tipo_moduloId: DataTypes.INTEGER
  }, {});
  Modulo.associate = function(models) {
    Modulo.hasMany(models.Registro_modulo,{
      foreignKey: 'moduloId',
      as:'Registro_modulo'
    });
  };
  return Modulo;
};