'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModalDexlite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModalDexlite.belongsTo(models.Modal, {
        foreignKey: 'id_modal',
      });
    }
  }
  ModalDexlite.init({
    id_modal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    hargaDexlite: DataTypes.INTEGER,
    deliveryOrderDexlite: DataTypes.INTEGER,
    keuntunganDexlite: DataTypes.INTEGER,
    hasilPerhitunganDexlite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModalDexlite',
  });
  return ModalDexlite;
};