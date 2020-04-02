'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_tiempogestion', {
      idtmpgest: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'IDENTIFICADOR UNICO'
      },
      fecha: {
        type: Sequelize.DATE,
        comment:'FECHA (DIA) QUE INICIA LA GESTION'
      },
      inicio: {
        type: Sequelize.DATE,
        comment:'HORA QUE INICIA LA GESTION'
      },
      fin: {
        type: Sequelize.DATE,
        comment:'HORA QUE TERMINA LA GESTION'
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
      comment: 'TABLA MAESTRO DEL TIEMPO DE GESTION DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_tiempogestion');
  }
};