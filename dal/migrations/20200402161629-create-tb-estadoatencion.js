'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_estadoatencions', {
      idstdatenc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DEL ESTADO DE LA ATENCION'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment:'FECHA DE CREACION DEL REGISTRO'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        comment:'FECHA DE ACTUALIZACION DEL REGISTRO'
      }
    },{
      comment: 'TABLA MAESTRO DEL ESTADO DE ATENCION DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_estadoatencions');
  }
};