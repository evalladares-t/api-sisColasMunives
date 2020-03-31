'use strict';
module.exports = (sequelize, DataTypes) => {
  const Atencion = sequelize.define('Atencion', {
    descripcion: DataTypes.STRING,
    usuario_id: DataTypes.STRING,
    estado_atencionId: DataTypes.INTEGER,
    casuisticaId: DataTypes.INTEGER,
    ticketId: DataTypes.INTEGER,
    derivaId: DataTypes.INTEGER
  }, {});
  Atencion.associate = function(models) {

  };
  return Atencion;
};