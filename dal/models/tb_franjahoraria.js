'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_franjahoraria = sequelize.define('tb_franjahoraria', {
    fecha: DataTypes.STRING,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE,
    estado: DataTypes.BOOLEAN
  }, {});
  tb_franjahoraria.associate = function(models) {
    tb_franjahoraria.hasMany(models.tb_ticket,{
      foreignKey: 'idfranjhor',
      as:'tb_ticket'
    });
  };
  return tb_franjahoraria;
};