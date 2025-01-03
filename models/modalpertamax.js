'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ModalPertamax extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ModalPertamax.belongsTo(models.Modal, {
        foreignKey: 'id_modal',
      });
    }
  }
  ModalPertamax.init({
    id_modal: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    hargaPertamax: DataTypes.INTEGER,
    delevieryOrderPertamax: DataTypes.INTEGER,
    keuntunganPertamax: DataTypes.INTEGER,
    hasilPerhitunganPertamax: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ModalPertamax',
  });
  return ModalPertamax;
};