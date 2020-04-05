'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_atencion', {
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
          model: 'tb_usuario',
          key:'iduser'
        }
      },
      idstdaten: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA ESTADO DE ATENCION',
        onDelete:'CASCADE',
        references:{
          model: 'tb_estadoatencion',
          key:'idstdaten'
        }
      },
      idcasuis: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA CASUISTICA',
        onDelete:'CASCADE',
        references:{
          model: 'tb_casuistica',
          key:'idcasuis'
        }
      },
      idtick: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA TICKET',
        onDelete:'CASCADE',
        references:{
          model: 'tb_ticket',
          key:'idtick'
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
    return queryInterface.dropTable('tb_atencion');
  }
};