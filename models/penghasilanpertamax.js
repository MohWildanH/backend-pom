'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenghasilanPertamax extends Model {
    static associate(models) {
      // Relasi ke Penghasilan (induk)
      PenghasilanPertamax.belongsTo(models.Penghasilan, {
        foreignKey: 'id_penghasilan',
        as: 'penghasilan-pertamax',
      });
    }
  }

  PenghasilanPertamax.init({
    id_penghasilan: DataTypes.INTEGER,
    hargaJualPertamax: DataTypes.INTEGER,
    takaranAwalPertamax: DataTypes.INTEGER,
    takaranAkhir1Pertamax: DataTypes.INTEGER,
    takaranAkhir2Pertamax: DataTypes.INTEGER,
    takaranAkhir3Pertamax: DataTypes.INTEGER,
    takaranAkhir4Pertamax: DataTypes.INTEGER,
    takaranAkhir5Pertamax: DataTypes.INTEGER,
    sisaPertamax: DataTypes.INTEGER,
    hasilPertamax: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PenghasilanPertamax',
  });
  return PenghasilanPertamax;
};
