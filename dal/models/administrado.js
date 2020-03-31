'use strict';
module.exports = (sequelize, DataTypes) => {
  const Administrado = sequelize.define('Administrado', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    dni: DataTypes.STRING,
    cod_rentas: DataTypes.STRING,
    tipo_administradoId: DataTypes.INTEGER
  }, {});
  Administrado.associate = function(models) {
    Administrado.hasMany(models.Ticket,{
      foreignKey: 'administradoId',
      as:'Ticket'
    })
  };
  return Administrado;
};