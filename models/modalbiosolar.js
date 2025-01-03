'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModalBiosolar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModalBiosolar.belongsTo(models.Modal, {
        foreignKey: 'id_modal',
      });
    }
  }
  ModalBiosolar.init({
    id_modal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    hargaBiosolar: DataTypes.INTEGER,
    deliveryOrderBiosolar: DataTypes.INTEGER,
    keuntunganBiosolar: DataTypes.INTEGER,
    hasilPerhitunganBiosolar: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModalBiosolar',
  });
  return ModalBiosolar;
};