'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_administrados', {
      idadmin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DEL ADMINISTRADO'
      },
      apells: {
        type: Sequelize.STRING,
        comment:'APELLIDOS DEL ADMINISTRADO'
      },
      dni: {
        type: Sequelize.STRING,
        comment:'DNI DEL ADMINISTRADO'
      },
      codrentas: {
        type: Sequelize.STRING,
        allowNull:true,
        comment:'CODIGO DE RENTAS DEL ADMINISTRADO (PUEDE SER NULO)'
      },
      idtipoadm: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA TIPO ADMINISTRADO',
        onDelete:'CASCADE',
        references:{
          model: 'tb_tipoadministrados',
          key:'idtipoadm'
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
      comment: 'TABLA MAESTRO DEL ADMINISTRADO DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_administrados');
  }
};