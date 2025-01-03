'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ModalTurbos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_modal: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Modals',
          key: 'id',
        },
      },
      hargaTurbo: {
        type: Sequelize.INTEGER
      },
      deliveryOrderTurbo: {
        type: Sequelize.INTEGER
      },
      keuntunganTurbo: {
        type: Sequelize.INTEGER
      },
      hasilPerhitunganTurbo: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ModalTurbos');
  }
};