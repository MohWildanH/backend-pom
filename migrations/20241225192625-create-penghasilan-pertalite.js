'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PenghasilanPertalites', {
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
      hargaJualPertalite: {
        type: Sequelize.INTEGER
      },
      takaranAwalPertalite: {
        type: Sequelize.INTEGER
      },
      takaranAkhir1Pertalite: {
        type: Sequelize.INTEGER
      },
      takaranAkhir2Pertalite: {
        type: Sequelize.INTEGER
      },
      takaranAkhir3Pertalite: {
        type: Sequelize.INTEGER
      },
      takaranAkhir4Pertalite: {
        type: Sequelize.INTEGER
      },
      takaranAkhir5Pertalite: {
        type: Sequelize.INTEGER
      },
      takaranAkhir6Pertalite: {
        type: Sequelize.INTEGER
      },
      takaranAkhir7Pertalite: {
        type: Sequelize.INTEGER
      },
      sisaPertalite: {
        type: Sequelize.INTEGER
      },
      hasilPertalite: {
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
    await queryInterface.dropTable('PenghasilanPertalites');
  }
};