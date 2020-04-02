'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_registromodulos', {
      idregmodulo: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
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
      idmodulo: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA MODULO',
        onDelete:'CASCADE',
        references:{
          model: 'tb_modulos',
          key:'idmodulo'
        }
      },
      idtiempogestion: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA TIEMPO GESTION',
        onDelete:'CASCADE',
        references:{
          model: 'tb_tiempogestions',
          key:'idtiempogestion'
        }
      },
      idstdregis: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA ESTADO DE REGISTRO',
        onDelete:'CASCADE',
        references:{
          model: 'tb_estadoregistros',
          key:'idstdregis'
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
      comment: 'TABLA MAESTRO DE LOS REGISTRO DEL MODULO DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_registromodulos');
  }
};