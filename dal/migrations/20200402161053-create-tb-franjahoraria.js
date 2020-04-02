'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_franjahoraria', {
      idfranjhor: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      fecha: {
        type: Sequelize.STRING,
        comment:'DIA DE LA SEMANA QUE SE HARA GESTION'
      },
      inicio: {
        type: Sequelize.DATE,
        comment:'HORA QUE SE INICIA LA GESTION'
      },
      fin: {
        type: Sequelize.DATE,
        comment:'HORA QUE SE TERMINA LA GESTION'
      },
      std: {
        type: Sequelize.BOOLEAN,
        comment:'ESTADO 1=ACTIVO  0= DESCATIVADO'
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
      comment: 'TABLA MAESTRO DE LA FRANJA HORARIA DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_franjahoraria');
  }
};