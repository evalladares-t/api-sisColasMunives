'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deriva = sequelize.define('Deriva', {
    atencionId: DataTypes.INTEGER
  }, {});
  Deriva.associate = function(models) {

  };
  return Deriva;
};