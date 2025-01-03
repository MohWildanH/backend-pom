const { Sequelize } = require("sequelize");
const config = require("../config/config");
const UserModel = require("./user"); // Import model User
const PenghasilanModel = require("./penghasilan"); // Import model Penghasilan
const PenghasilanPertaliteModel = require("./penghasilanpertalite"); // Import model PenghasilanPertalite
const PenghasilanPertamaxModel = require("./penghasilanpertamax"); // Import model PenghasilanPertamax
const PenghasilanDexliteModel = require("./penghasilandexlite"); // Import model PenghasilanDexlite
const PenghasilanTurboModel = require("./penghasilanturbo"); // Import model PenghasilanTurbo
const PenghasilanBiosolarModel = require("./penghasilanbiosolar"); // Import model PenghasilanBiosolar
const ModalModel = require("./modal"); // Pastikan nama file sesuai
const ModalBiosolarModel = require("./modalbiosolar");
const ModalPertaliteModel = require("./modalpertalite");
const ModalPertamaxModel = require("./modalpertamax");
const ModalDexliteModel = require("./modaldexlite");
const ModalTurboModel = require("./modalturbo");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

// Inisialisasi model
const User = UserModel(sequelize, Sequelize.DataTypes);
const Penghasilan = PenghasilanModel(sequelize, Sequelize.DataTypes);
const PenghasilanPertalite = PenghasilanPertaliteModel(sequelize, Sequelize.DataTypes);
const PenghasilanPertamax = PenghasilanPertamaxModel(sequelize, Sequelize.DataTypes);
const PenghasilanDexlite = PenghasilanDexliteModel(sequelize, Sequelize.DataTypes);
const PenghasilanTurbo = PenghasilanTurboModel(sequelize, Sequelize.DataTypes);
const PenghasilanBiosolar = PenghasilanBiosolarModel(sequelize, Sequelize.DataTypes);
const Modal = ModalModel(sequelize, Sequelize.DataTypes);
const ModalBiosolar = ModalBiosolarModel(sequelize, Sequelize.DataTypes);
const ModalPertalite = ModalPertaliteModel(sequelize, Sequelize.DataTypes);
const ModalPertamax = ModalPertamaxModel(sequelize, Sequelize.DataTypes);
const ModalDexlite = ModalDexliteModel(sequelize, Sequelize.DataTypes);
const ModalTurbo = ModalTurboModel(sequelize, Sequelize.DataTypes);


// Menentukan asosiasi antar model
Penghasilan.hasMany(PenghasilanPertalite, { foreignKey: 'id_penghasilan' });
Penghasilan.hasMany(PenghasilanPertamax, { foreignKey: 'id_penghasilan' });
Penghasilan.hasMany(PenghasilanDexlite, { foreignKey: 'id_penghasilan' });
Penghasilan.hasMany(PenghasilanTurbo, { foreignKey: 'id_penghasilan' });
Penghasilan.hasMany(PenghasilanBiosolar, { foreignKey: 'id_penghasilan' });

Modal.hasMany(ModalBiosolar, { foreignKey: "id_modal" });
Modal.hasMany(ModalPertalite, { foreignKey: "id_modal" });
Modal.hasMany(ModalPertamax, { foreignKey: "id_modal" });
Modal.hasMany(ModalDexlite, { foreignKey: "id_modal" });
Modal.hasMany(ModalTurbo, { foreignKey: "id_modal" });

// Relasi antara Penghasilan dan PenghasilanPertalite

PenghasilanPertalite.belongsTo(Penghasilan, { foreignKey: 'id_penghasilan' });
PenghasilanPertamax.belongsTo(Penghasilan, { foreignKey: 'id_penghasilan' });
PenghasilanDexlite.belongsTo(Penghasilan, { foreignKey: 'id_penghasilan' });
PenghasilanTurbo.belongsTo(Penghasilan, { foreignKey: 'id_penghasilan' });
PenghasilanBiosolar.belongsTo(Penghasilan, { foreignKey: 'id_penghasilan' });

ModalBiosolar.belongsTo(Modal, { foreignKey: "id_modal" });
ModalPertalite.belongsTo(Modal, { foreignKey: "id_modal" });
ModalPertamax.belongsTo(Modal, { foreignKey: "id_modal" });
ModalDexlite.belongsTo(Modal, { foreignKey: "id_modal" });
ModalTurbo.belongsTo(Modal, { foreignKey: "id_modal" });

// Ekspor model dan instance sequelize
module.exports = {
  sequelize,
  User,
  Penghasilan,
  PenghasilanPertalite,
  PenghasilanPertamax,
  PenghasilanDexlite,
  PenghasilanTurbo,
  PenghasilanBiosolar,
  Modal,
  ModalBiosolar,
  ModalPertalite,
  ModalPertamax,
  ModalDexlite,
  ModalTurbo,
};
