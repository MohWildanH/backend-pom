'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PenghasilanDexlites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_penghasilan: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Penghasilans',
          key: 'id',
        },
      },
      hargaJualDexlite: {
        type: Sequelize.INTEGER
      },
      takaranAwalDexlite: {
        type: Sequelize.INTEGER
      },
      takaranAkhirDexlite: {
        type: Sequelize.INTEGER
      },
      sisaDexlite: {
        type: Sequelize.INTEGER
      },
      hasilDexlite: {
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
    await queryInterface.dropTable('PenghasilanDexlites');
  }
};