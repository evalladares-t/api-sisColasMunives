'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tickets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      franja_horariaId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Franja_horaria',
          key:'id'
        }
      },
      prioridadId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Prioridads',
          key:'id'
        }
      },
      administradoId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Administrados',
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
    return queryInterface.dropTable('Tickets');
  }
};