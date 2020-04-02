'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_multimedia', {
      idmultim: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DEL ARCHIVO MULTIMEDIA'
      },
      url: {
        type: Sequelize.STRING,
        comment:'DIRECCION URL DEL ARCHIVO MULTIMEDIA'
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
      comment: 'TABLA MAESTRO DE LOS ARCHIVOS MULTIMEDIA DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_multimedia');
  }
};