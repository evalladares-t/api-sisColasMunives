'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_atencions', {
      idatenc: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      descrip: {
        type: Sequelize.STRING,
        comment:'DESCRIPCION DE LA ATENCION'
      },
      deriva: {
        type: Sequelize.INTEGER,
        allowNull:true,
        comment:'SI DERIVA DE OTRA ATENCION (PUEDE SER NULO)'
      },
      iduser: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA USUARIO',
        onDelete:'CASCADE',
        references:{
          model: 'tb_usuarios',
          key:'iduser'
        }
      },
      idstdatenc: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA ESTADO DE ATENCION',
        onDelete:'CASCADE',
        references:{
          model: 'tb_estadoatencions',
          key:'idstdatenc'
        }
      },
      idcasuis: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA ESTADO DE ATENCION',
        onDelete:'CASCADE',
        references:{
          model: 'tb_casuisticas',
          key:'idcasuis'
        }
      },
      idticket: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA TICKET',
        onDelete:'CASCADE',
        references:{
          model: 'tb_tickets',
          key:'idticket'
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
      comment: 'TABLA MAESTRO DE LA ATENCION DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_atencions');
  }
};