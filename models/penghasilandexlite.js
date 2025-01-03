'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenghasilanDexlite extends Model {
    static associate(models) {
      // Relasi ke Penghasilan (induk)
      PenghasilanDexlite.belongsTo(models.Penghasilan, {
        foreignKey: 'id_penghasilan',
        as: 'penghasilan-dexlite',
      });
    }
  }

  PenghasilanDexlite.init({
    id_penghasilan: DataTypes.INTEGER,
    hargaJualDexlite: DataTypes.INTEGER,
    takaranAwalDexlite: DataTypes.INTEGER,
    takaranAkhirDexlite: DataTypes.INTEGER,
    sisaDexlite: DataTypes.INTEGER,
    hasilDexlite: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PenghasilanDexlite',
  });
  return PenghasilanDexlite;
};
