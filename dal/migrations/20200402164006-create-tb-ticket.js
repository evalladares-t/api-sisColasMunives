'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_ticket', {
      idtick: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DEL TICKET'
      },
      idfranjhor: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA FRANJA HORARIA',
        onDelete:'CASCADE',
        references:{
          model: 'tb_franjahoraria',
          key:'idfranjhor'
        }
      },
      idpriord: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA PRIORIDAD',
        onDelete:'CASCADE',
        references:{
          model: 'tb_prioridad',
          key:'idpriord'
        }
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
      comment: 'TABLA MAESTRO DEL TICKET GENERADO DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_ticket');
  }
};