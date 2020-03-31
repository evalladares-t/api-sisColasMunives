'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Atencions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      estado_atencionId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Estado_atencion',
          key:'id'
        }
      },
      casuisticaId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Casuisticas',
          key:'id'
        }
      },
      ticketId: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Tickets',
          key:'id'
        }
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        onDelete:'CASCADE',
        references:{
          model: 'Usuarios',
          key:'id'
        }
      },
      derivaId: {
        type: Sequelize.INTEGER,
        allowNull:true,
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
    return queryInterface.dropTable('Atencions');
  }
};