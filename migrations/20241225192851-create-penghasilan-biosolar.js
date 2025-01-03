'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PenghasilanBiosolars', {
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
      hargaJualBiosolar: {
        type: Sequelize.INTEGER
      },
      takaranAwalBiosolar: {
        type: Sequelize.INTEGER
      },
      takaranAkhir1Biosolar: {
        type: Sequelize.INTEGER
      },
      takaranAkhir2Biosolar: {
        type: Sequelize.INTEGER
      },
      sisaBiosolar: {
        type: Sequelize.INTEGER
      },
      hasilBiosolar: {
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
    await queryInterface.dropTable('PenghasilanBiosolars');
  }
};