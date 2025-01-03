'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenghasilanPertalite extends Model {
    static associate(models) {
      // Relasi ke Penghasilan (induk)
      PenghasilanPertalite.belongsTo(models.Penghasilan, {
        foreignKey: 'id_penghasilan',
        as: 'penghasilan-pertalite',
      });
    }
  }

  PenghasilanPertalite.init({
    id_penghasilan: DataTypes.INTEGER,
    hargaJualPertalite: DataTypes.INTEGER,
    takaranAwalPertalite: DataTypes.INTEGER,
    takaranAkhir1Pertalite: DataTypes.INTEGER,
    takaranAkhir2Pertalite: DataTypes.INTEGER,
    takaranAkhir3Pertalite: DataTypes.INTEGER,
    takaranAkhir4Pertalite: DataTypes.INTEGER,
    takaranAkhir5Pertalite: DataTypes.INTEGER,
    takaranAkhir6Pertalite: DataTypes.INTEGER,
    takaranAkhir7Pertalite: DataTypes.INTEGER,
    sisaPertalite: DataTypes.INTEGER,
    hasilPertalite: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PenghasilanPertalite',
  });
  return PenghasilanPertalite;
};
