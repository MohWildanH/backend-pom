'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PenghasilanTurbos', {
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
      hargaJualTurbo: {
        type: Sequelize.INTEGER
      },
      takaranAwalTurbo: {
        type: Sequelize.INTEGER
      },
      sisaTurbo: {
        type: Sequelize.INTEGER
      },
      hasilTurbo: {
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
    await queryInterface.dropTable('PenghasilanTurbos');
  }
};