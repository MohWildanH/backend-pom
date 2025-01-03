'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PenghasilanBiosolar extends Model {
    static associate(models) {
      // Relasi ke Penghasilan (induk)
      PenghasilanBiosolar.belongsTo(models.Penghasilan, {
        foreignKey: 'id_penghasilan',
        as: 'penghasilan-biosolar',
      });
    }
  }

  PenghasilanBiosolar.init({
    id_penghasilan: DataTypes.INTEGER,
    hargaJualBiosolar: DataTypes.INTEGER,
    takaranAwalBiosolar: DataTypes.INTEGER,
    takaranAkhir1Biosolar: DataTypes.INTEGER,
    takaranAkhir2Biosolar: DataTypes.INTEGER,
    sisaBiosolar: DataTypes.INTEGER,
    hasilBiosolar: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'PenghasilanBiosolar',
  });
  return PenghasilanBiosolar;
};
