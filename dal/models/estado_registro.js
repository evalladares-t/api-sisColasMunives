'use strict';
module.exports = (sequelize, DataTypes) => {
  const Estado_registro = sequelize.define('Estado_registro', {
    nombre: DataTypes.STRING
  }, {});
  Estado_registro.associate = function(models) {
    Estado_registro.hasMany(models.Registro_modulo,{
      foreignKey: 'estado_registroId',
      as:'Registro_modulo'
    });
  };
  return Estado_registro;
};