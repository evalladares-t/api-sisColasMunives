'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_atencion = sequelize.define('tb_atencion', {
    idatenc: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    descrip: DataTypes.STRING,
    deriva: DataTypes.INTEGER,
    idstdaten: DataTypes.INTEGER,
    idcasuis: DataTypes.INTEGER,
    idtick: DataTypes.INTEGER,
    iduser: DataTypes.INTEGER
  }, {
    freezeTableName: true
  });
  tb_atencion.associate = function(models) {
    // associations can be defined here
  };
  return tb_atencion;
};