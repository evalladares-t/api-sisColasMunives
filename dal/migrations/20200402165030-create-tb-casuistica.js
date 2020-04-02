'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_casuisticas', {
      idcasuis: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DE LA CASUISTICA'
      },
      idtipocasuis: {
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR TABLA TIPO CASUISTICA',
        onDelete:'CASCADE',
        references:{
          model: 'tb_tipocasuisticas',
          key:'idtipocasuis'
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
      comment: 'TABLA MAESTRO DE LA CASUISTICA DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_casuisticas');
  }
};