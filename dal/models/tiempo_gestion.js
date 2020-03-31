'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tiempo_gestion = sequelize.define('Tiempo_gestion', {
    fecha: DataTypes.DATE,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE
  }, {});
  Tiempo_gestion.associate = function(models) {
    Tiempo_gestion.hasMany(models.Registro_modulo,{
      foreignKey: 'tiempo_gestionId',
      as:'Registro_modulo'
    });
  };
  return Tiempo_gestion;
};