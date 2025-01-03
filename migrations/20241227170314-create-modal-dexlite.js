'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ModalDexlites', {
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
      hargaDexlite: {
        type: Sequelize.INTEGER
      },
      deliveryOrderDexlite: {
        type: Sequelize.INTEGER
      },
      keuntunganDexlite: {
        type: Sequelize.INTEGER
      },
      hasilPerhitunganDexlite: {
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
    await queryInterface.dropTable('ModalDexlites');
  }
};