'use strict';
module.exports = (sequelize, DataTypes) => {
  const Registro_modulo = sequelize.define('Registro_modulo', {
    usuarioId: DataTypes.INTEGER,
    moduloId: DataTypes.INTEGER,
    tiempo_gestionId: DataTypes.INTEGER,
    estado_registroId: DataTypes.INTEGER
  }, {});
  Registro_modulo.associate = function(models) {
    // associations can be defined here
  };
  return Registro_modulo;
};