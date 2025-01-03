const db = require("../models");

// Fungsi untuk membuat modal dengan detail
exports.createModalWithDetails = async (req, res) => {
  const {
    id_user,
    namaFile,
    biosolar,
    pertalite,
    pertamax,
    dexlite,
    turbo,
  } = req.body;

  const transaction = await db.sequelize.transaction();

  try {
    // Simpan data utama modal
    const modal = await db.Modal.create(
      {
        id_user,
        namaFile,
      },
      { transaction }
    );

    const id_modal = modal.id;

    // Simpan data relasi jika ada
    if (biosolar && biosolar.length > 0) {
      const biosolarData = biosolar.map((item) => ({
        ...item,
        id_modal,
      }));
      await db.ModalBiosolar.bulkCreate(biosolarData, { transaction });
    }

    if (pertalite && pertalite.length > 0) {
      const pertaliteData = pertalite.map((item) => ({
        ...item,
        id_modal,
      }));
      await db.ModalPertalite.bulkCreate(pertaliteData, { transaction });
    }

    if (pertamax && pertamax.length > 0) {
      const pertamaxData = pertamax.map((item) => ({
        ...item,
        id_modal,
      }));
      await db.ModalPertamax.bulkCreate(pertamaxData, { transaction });
    }

    if (dexlite && dexlite.length > 0) {
      const dexliteData = dexlite.map((item) => ({
        ...item,
        id_modal,
      }));
      await db.ModalDexlite.bulkCreate(dexliteData, { transaction });
    }

    if (turbo && turbo.length > 0) {
      const turboData = turbo.map((item) => ({
        ...item,
        id_modal,
      }));
      await db.ModalTurbo.bulkCreate(turboData, { transaction });
    }

    // Commit transaksi
    await transaction.commit();

    res.status(201).json({
      status: "success",
      message: "Modal with details has been successfully created.",
      data: modal,
    });
  } catch (error) {
    // Rollback transaksi jika terjadi error
    await transaction.rollback();
    console.error("Error creating Modal with details:", error);
    res
      .status(500)
      .json({ status: "error", message: "An unexpected error occurred." });
  }
};

// Fungsi untuk mengambil semua modal dengan detail
exports.getAllModalWithDetails = async (req, res) => {
  try {
    const modalList = await db.Modal.findAll({
      include: [
        { model: db.ModalBiosolar },
        { model: db.ModalPertalite },
        { model: db.ModalPertamax },
        { model: db.ModalDexlite },
        { model: db.ModalTurbo },
      ],
    });

    res.status(200).json({
      status: "success",
      message: "Successfully retrieved all Modals with details.",
      data: modalList,
    });
  } catch (error) {
    console.error("Error fetching Modals with details:", error);
    res
      .status(500)
      .json({ status: "error", message: "An unexpected error occurred." });
  }
};

// Fungsi untuk mengambil modal berdasarkan ID
exports.getModalById = async (req, res) => {
  const { id } = req.params;

  try {
    const modal = await db.Modal.findOne({
      where: { id },
      include: [
        { model: db.ModalBiosolar },
        { model: db.ModalPertalite },
        { model: db.ModalPertamax },
        { model: db.ModalDexlite },
        { model: db.ModalTurbo },
      ],
    });

    if (!modal) {
      return res.status(404).json({
        status: "error",
        message: `Modal with ID ${id} not found.`,
      });
    }

    res.status(200).json({
      status: "success",
      message: `Successfully retrieved Modal with ID ${id}.`,
      data: modal,
    });
  } catch (error) {
    console.error("Error fetching Modal by ID:", error);
    res
      .status(500)
      .json({ status: "error", message: "An unexpected error occurred." });
  }
};
// Fungsi untuk menghapus modal beserta detailnya
exports.deleteModalWithDetails = async (req, res) => {
    const { id } = req.params;
  
    const transaction = await db.sequelize.transaction();
  
    try {
      // Cari modal berdasarkan ID
      const modal = await db.Modal.findOne({ where: { id }, transaction });
  
      if (!modal) {
        return res.status(404).json({
          status: "error",
          message: `Modal with ID ${id} not found.`,
        });
      }
  
      // Hapus data relasi terkait
      await db.ModalBiosolar.destroy({ where: { id_modal: id }, transaction });
      await db.ModalPertalite.destroy({ where: { id_modal: id }, transaction });
      await db.ModalPertamax.destroy({ where: { id_modal: id }, transaction });
      await db.ModalDexlite.destroy({ where: { id_modal: id }, transaction });
      await db.ModalTurbo.destroy({ where: { id_modal: id }, transaction });
  
      // Hapus modal utama
      await modal.destroy({ transaction });
  
      // Commit transaksi
      await transaction.commit();
  
      res.status(200).json({
        status: "success",
        message: `Modal with ID ${id} and its details have been successfully deleted.`,
      });
    } catch (error) {
      // Rollback transaksi jika terjadi error
      await transaction.rollback();
      console.error("Error deleting Modal with details:", error);
      res
        .status(500)
        .json({ status: "error", message: "An unexpected error occurred." });
    }
  };
  