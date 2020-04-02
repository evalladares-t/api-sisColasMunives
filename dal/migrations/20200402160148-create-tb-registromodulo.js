'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_registromodulo', {
      Idrmod: {
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
          model: 'tb_usuario',
          key:'iduser'
        }
      },
      idmod: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA MODULO',
        onDelete:'CASCADE',
        references:{
          model: 'tb_modulo',
          key:'idmod'
        }
      },
      idtmpgest: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA TIEMPO GESTION',
        onDelete:'CASCADE',
        references:{
          model: 'tb_tiempogestion',
          key:'idtmpgest'
        }
      },
      idstdregis: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA ESTADO DE REGISTRO',
        onDelete:'CASCADE',
        references:{
          model: 'tb_estadoregistro',
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
    return queryInterface.dropTable('tb_registromodulo');
  }
};