'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModalPertalite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModalPertalite.belongsTo(models.Modal, {
        foreignKey: 'id_modal',
      });
    }
  }
  ModalPertalite.init({
    id_modal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    hargaPertalite: DataTypes.INTEGER,
    deliveryOrderPertalite: DataTypes.INTEGER,
    keuntunganPertalite: DataTypes.INTEGER,
    hasilPerhitunganPertalite: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModalPertalite',
  });
  return ModalPertalite;
};