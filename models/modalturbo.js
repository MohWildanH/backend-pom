'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModalTurbo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModalTurbo.belongsTo(models.Modal, {
        foreignKey: 'id_modal',
      });
    }
  }
  ModalTurbo.init({
    id_modal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    hargaTurbo: DataTypes.INTEGER,
    deliveryOrderTurbo: DataTypes.INTEGER,
    keuntunganTurbo: DataTypes.INTEGER,
    hasilPerhitunganTurbo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModalTurbo',
  });
  return ModalTurbo;
};