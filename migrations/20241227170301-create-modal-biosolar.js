'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ModalBiosolars', {
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
      hargaBiosolar: {
        type: Sequelize.INTEGER
      },
      deliveryOrderBiosolar: {
        type: Sequelize.INTEGER
      },
      keuntunganBiosolar: {
        type: Sequelize.INTEGER
      },
      hasilPerhitunganBiosolar: {
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
    await queryInterface.dropTable('ModalBiosolars');
  }
};