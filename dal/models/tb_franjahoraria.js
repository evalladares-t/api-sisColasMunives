'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_franjahoraria = sequelize.define('tb_franjahoraria', {
    idfranjhor: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    fecha: {
      type:DataTypes.STRING,
      comment:'DIA DE LA SEMANA QUE SE HARA GESTION'
    },
    inicio: {
      type:DataTypes.DATE,
      comment:'HORA QUE SE INICIA LA GESTION',
      allowNull:true
    },
    fin: {
      type:DataTypes.DATE,
      allowNull:true,
      comment:'HORA QUE SE TERMINA LA GESTION'
    },
    std: {
      type:DataTypes.BOOLEAN,
      comment:'ESTADO 1=ACTIVO  0= DESCATIVADO'
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LA FRANJA HORARIA DEL SISTEMA'
  });
  tb_franjahoraria.associate = function(models) {
    tb_franjahoraria.hasMany(models.tb_ticket,{
      foreignKey: 'idfranjhor',
      as:'tb_ticket'
    });
  };
  return tb_franjahoraria;
};