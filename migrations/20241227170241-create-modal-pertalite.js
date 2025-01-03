'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ModalPertalites', {
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
      hargaPertalite: {
        type: Sequelize.INTEGER
      },
      deliveryOrderPertalite: {
        type: Sequelize.INTEGER
      },
      keuntunganPertalite: {
        type: Sequelize.INTEGER
      },
      hasilPerhitunganPertalite: {
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
    await queryInterface.dropTable('ModalPertalites');
  }
};