'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PenghasilanPertamaxes', {
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
      hargaJualPertamax: {
        type: Sequelize.INTEGER
      },
      takaranAwalPertamax: {
        type: Sequelize.INTEGER
      },
      takaranAkhir1Pertamax: {
        type: Sequelize.INTEGER
      },
      takaranAkhir2Pertamax: {
        type: Sequelize.INTEGER
      },
      takaranAkhir3Pertamax: {
        type: Sequelize.INTEGER
      },
      takaranAkhir4Pertamax: {
        type: Sequelize.INTEGER
      },
      takaranAkhir5Pertamax: {
        type: Sequelize.INTEGER
      },
      sisaPertamax: {
        type: Sequelize.INTEGER
      },
      hasilPertamax: {
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
    await queryInterface.dropTable('PenghasilanPertamaxes');
  }
};