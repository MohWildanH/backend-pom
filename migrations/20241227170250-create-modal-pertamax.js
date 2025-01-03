'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ModalPertamaxes', {
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
      hargaPertamax: {
        type: Sequelize.INTEGER
      },
      delevieryOrderPertamax: {
        type: Sequelize.INTEGER
      },
      keuntunganPertamax: {
        type: Sequelize.INTEGER
      },
      hasilPerhitunganPertamax: {
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
    await queryInterface.dropTable('ModalPertamaxes');
  }
};