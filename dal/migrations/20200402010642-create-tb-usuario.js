'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_usuario', {
      iduser: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        comment:'IDENTIFICADOR UNICO'
      },
      nom: {
        type: Sequelize.STRING,
        comment:'NOMBRE DEL USUARIO'
      },
      apells: {
        type: Sequelize.STRING,
        comment:'APELLIDOS DEL USUARIO'
      },
      dni: {
        type: Sequelize.STRING,
        comment:'DNI DEL USUARIO'
      },
      user: {
        type: Sequelize.STRING,
        comment:'USERNAME DEL USUARIO PARA INGRESAR AL SISTEMA'
      },
      pass: {
        type: Sequelize.STRING,
        comment:'PASSWORD DEL USUARIO PARA INGRESAR AL SISTEMA'
      },
      imgurl: {
        type: Sequelize.STRING,
        allowNull:true,
        comment:'DIRECCION URL DE LA FOTO DEL USUARIO'
      },
      std: {
        type: Sequelize.BOOLEAN,
        comment:'ESTADO 1=ACTIVO  0= DESCATIVADO'
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
      comment: 'TABLA MAESTRO DE LOS USUARIOS DEL SISTEMA'
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_usuarios');
  }
};