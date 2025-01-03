'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Modal.belongsTo(models.User, {
        foreignKey: 'id_user',
      });
      Modal.hasMany(models.ModalPertalite, { foreignKey: 'id_modal' });
      Modal.hasMany(models.ModalPertamax, { foreignKey: 'id_modal' });
      Modal.hasMany(models.ModalDexlite, { foreignKey: 'id_modal' });
      Modal.hasMany(models.ModalBiosolar, { foreignKey: 'id_modal' });
      Modal.hasMany(models.ModalTurbo, { foreignKey: 'id_modal' });
    }
  }
  Modal.init({
    id_user: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
    namaFile: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Modal',
  });
  return Modal;
};