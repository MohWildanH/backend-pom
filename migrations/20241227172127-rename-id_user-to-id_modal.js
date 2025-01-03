'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Rename column id_user to id_modal in ModalPertalite table
    await queryInterface.renameColumn('ModalPertalites', 'id_user', 'id_modal');
  },

  down: async (queryInterface, Sequelize) => {
    // Rename column id_modal back to id_user in ModalPertalite table
    await queryInterface.renameColumn('ModalPertalites', 'id_modal', 'id_user');
  }
};
