'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Casuisticas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      prioridadId: {
        type: Sequelize.INTEGER,
          onDelete:'CASCADE',
          references:{
            model: 'Prioridads',
            key:'id'
          }
      },
      tipo_casuisticaId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Tipo_casuisticas',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Casuisticas');
  }
};