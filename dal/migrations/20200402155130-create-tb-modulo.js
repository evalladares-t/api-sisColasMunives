'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_modulo', {
      idmod: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DEL MODULO'
      },
      std: {
        type: Sequelize.BOOLEAN,
        comment:'ESTADO 1=ACTIVO  0= DESCATIVADO'
      },
      idtmod: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA TIPO MODULO',
        onDelete:'CASCADE',
        references:{
          model: 'tb_tipomodulo',
          key:'idtmod'
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
      comment: 'TABLA MAESTRO DE LOS MODULOS DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_modulo');
  }
};