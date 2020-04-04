'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_franjahoraria = sequelize.define('tb_franjahoraria', {
    idfranjhor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    fecha: DataTypes.STRING,
    inicio: DataTypes.DATE,
    fin: DataTypes.DATE,
    std: DataTypes.BOOLEAN
  }, {
    freezeTableName: true
  });
  tb_franjahoraria.associate = function(models) {
    tb_franjahoraria.hasMany(models.tb_ticket,{
      foreignKey: 'idfranjhor',
      as:'tb_ticket'
    });
  };
  return tb_franjahoraria;
};