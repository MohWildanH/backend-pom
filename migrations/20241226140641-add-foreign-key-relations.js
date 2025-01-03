'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Menambahkan foreign key di PenghasilanBiosolar
    await queryInterface.addColumn('PenghasilanBiosolars', 'id_penghasilan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Penghasilans', // Nama tabel induk
        key: 'id',              // Kolom yang menjadi foreign key
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    // Ulangi langkah ini untuk tabel lainnya
    await queryInterface.addColumn('PenghasilanDexlites', 'id_penghasilan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Penghasilans',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addColumn('PenghasilanPertalites', 'id_penghasilan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Penghasilans',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addColumn('PenghasilanPertamaxes', 'id_penghasilan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Penghasilans',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryInterface.addColumn('PenghasilanTurbos', 'id_penghasilan', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Penghasilans',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Menghapus foreign key jika rollback
    await queryInterface.removeColumn('PenghasilanBiosolars', 'id_penghasilan');
    await queryInterface.removeColumn('PenghasilanDexlites', 'id_penghasilan');
    await queryInterface.removeColumn('PenghasilanPertalites', 'id_penghasilan');
    await queryInterface.removeColumn('PenghasilanPertamaxes', 'id_penghasilan');
    await queryInterface.removeColumn('PenghasilanTurbos', 'id_penghasilan');
  }
};
