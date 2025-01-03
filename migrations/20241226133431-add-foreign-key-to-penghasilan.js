'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Menambahkan foreign key pada kolom 'id_user' di tabel 'Penghasilans'
    await queryInterface.addConstraint('Penghasilans', {
      fields: ['id_user'], // Kolom yang akan diberikan constraint
      type: 'foreign key',
      name: 'fk_penghasilan_user', // Nama constraint
      references: {
        table: 'Users', // Tabel referensi (gunakan "table" alih-alih "model")
        field: 'id', // Kolom referensi
      },
      onDelete: 'CASCADE', // Jika user dihapus, maka penghasilan yang terkait juga akan dihapus
      onUpdate: 'CASCADE', // Jika ID user diperbarui, maka perubahan ini akan diterapkan pada penghasilan terkait
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Rollback perubahan: menghapus foreign key
    await queryInterface.removeConstraint('Penghasilans', 'fk_penghasilan_user');
  }
};
