'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Penghasilan extends Model {
    static associate(models) {
      // Relasi ke semua tabel anak
      Penghasilan.hasMany(models.PenghasilanBiosolar, {
        foreignKey: 'id_penghasilan',
        // as: 'biosolars',
      });
      Penghasilan.hasMany(models.PenghasilanDexlite, {
        foreignKey: 'id_penghasilan',
        // as: 'dexlites',
      });
      Penghasilan.hasMany(models.PenghasilanPertalite, {
        foreignKey: 'id_penghasilan',
        // as: 'pertalites',
      });
      Penghasilan.hasMany(models.PenghasilanPertamax, {
        foreignKey: 'id_penghasilan',
        // as: 'pertamaxes',
      });
      Penghasilan.hasMany(models.PenghasilanTurbo, {
        foreignKey: 'id_penghasilan',
        // as: 'turbos',
      });
      Penghasilan.belongsTo(models.User, {
        foreignKey: 'id_user',
      });
    }
  }

  Penghasilan.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    namaFile: DataTypes.STRING,
    namaPengeluaran: DataTypes.STRING,
    nominalPengeluaran: DataTypes.INTEGER,
    hasilTotal: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Penghasilan',
  });
  return Penghasilan;
};
