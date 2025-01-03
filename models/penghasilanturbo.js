'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenghasilanTurbo extends Model {
    static associate(models) {
      // Relasi ke Penghasilan (induk)
      PenghasilanTurbo.belongsTo(models.Penghasilan, {
        foreignKey: 'id_penghasilan',
        as: 'penghasilan-turbo',
      });
    }
  }

  PenghasilanTurbo.init({
    id_penghasilan: DataTypes.INTEGER,
    hargaJualTurbo: DataTypes.INTEGER,
    takaranAwalTurbo: DataTypes.INTEGER,
    sisaTurbo: DataTypes.INTEGER,
    hasilTurbo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PenghasilanTurbo',
  });
  return PenghasilanTurbo;
};
