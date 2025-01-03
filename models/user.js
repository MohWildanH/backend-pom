'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Menambahkan relasi antara User dan Penghasilan
      User.hasMany(models.Penghasilan, {
        foreignKey: 'id_user',  // Kolom yang ada di tabel Penghasilan yang merujuk ke User
        as: 'penghasilans',     // Alias relasi
        onDelete: 'CASCADE',    // Jika User dihapus, maka Penghasilan yang terkait juga akan dihapus
        onUpdate: 'CASCADE'     // Jika ID User diperbarui, maka ID di Penghasilan akan ikut diperbarui
      });
      User.hasMany(models.Modal, {
        foreignKey: 'id_user',  // Kolom yang ada di tabel Penghasilan yang merujuk ke User
        as: 'modals',     // Alias relasi
        onDelete: 'CASCADE',    // Jika User dihapus, maka Penghasilan yang terkait juga akan dihapus
        onUpdate: 'CASCADE'     // Jika ID User diperbarui, maka ID di Penghasilan akan ikut diperbarui
      });
    }
  }

  User.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
