'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    dni: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    imagenurl: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    perfilId: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    Usuario.hasMany(models.Multimedia,{
      foreignKey: 'usuarioId',
      as:'Multimedia'
    });
    Usuario.hasMany(models.Registro_modulo,{
      foreignKey: 'usuarioId',
      as:'Registro_modulo'
    });
    Usuario.hasMany(models.Atencion,{
      foreignKey: 'usuarioId',
      as:'Atencion'
    });
  };
  return Usuario;
};