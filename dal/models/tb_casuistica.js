'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_casuistica = sequelize.define('tb_casuistica', {
    idcasuis: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment:'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DE LA CASUISTICA'
    },
    idscas: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA TIPO CASUISTICA',
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LA CASUISTICA DEL SISTEMA'
  });
  tb_casuistica.associate = function(models) {
    tb_casuistica.hasMany(models.tb_atencion,{
      foreignKey: 'idcasuis',
      as:'tb_atencion'
    });
    tb_casuistica.belongsTo(models.tb_subcasuistica,{
      foreignKey: 'idscas',
      as:'tb_subcasuistica'
    });

  };
  return tb_casuistica;
};