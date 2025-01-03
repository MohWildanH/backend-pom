'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Rename column 'akaranAkhir2Biosolar' to 'takaranAkhir2Biosolar'
    await queryInterface.renameColumn('PenghasilanBiosolars', 'akaranAkhir2Biosolar', 'takaranAkhir2Biosolar');
  },

  down: async (queryInterface, Sequelize) => {
    // Rollback column name change (if needed)
    await queryInterface.renameColumn('PenghasilanBiosolars', 'takaranAkhir2Biosolar', 'akaranAkhir2Biosolar');
  }
};
