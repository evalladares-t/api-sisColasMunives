'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_permisos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment: 'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DEL PERMISO'
      },
      std: {
        type: Sequelize.BOOLEAN,
        comment:'ESTADO 1=ACTIVO  0= DESCATIVADO'
      },
      idperf: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA PERFIL',
        onDelete:'CASCADE',
        references:{
          model: 'tb_perfils',
          key:'idperf'
        }
      },
      idacc: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA ACCION',
        onDelete:'CASCADE',
        references:{
          model: 'tb_accions',
          key:'idacc'
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
      comment: 'TABLA MAESTRO DE LOS PERMISOS DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_permisos');
  }
};