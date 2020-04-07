'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_modulo = sequelize.define('tb_modulo', {
    idmod: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
      comment: 'IDENTIFICADOR UNICO'
    },
    nom: {
      type:DataTypes.STRING,
      comment:'NOMBRE DEL MODULO'
    },
    std: {
      type:DataTypes.BOOLEAN,
      comment:'ESTADO 1=ACTIVO  0= DESCATIVADO'
    },
    idtmod: {
      type:DataTypes.INTEGER,
      comment:'IDENTIFICADOR TABLA TIPO MODULO',
    }
  }, {
    freezeTableName: true,
    comment: 'TABLA MAESTRO DE LOS MODULOS DEL SISTEMA'
  });
  tb_modulo.associate = function(models) {
    tb_modulo.hasMany(models.tb_registromodulo,{
      foreignKey: 'idmod',
      as:'tb_registromodulo'
    });
    tb_modulo.belongsTo(models.tb_tipomodulo,{
      foreignKey: 'idmod',
      as:'tb_tipomodulo'
    });
  };
  return tb_modulo;
};