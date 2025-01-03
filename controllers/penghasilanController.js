const db = require("../models");

// Fungsi untuk membuat penghasilan dengan detail
exports.createPenghasilanWithDetails = async (req, res) => {
  const {
    id_user,
    namaFile,
    namaPengeluaran,
    nominalPengeluaran,
    hasilTotal,
    biosolar,
    dexlite,
    pertalite,
    pertamax,
    turbo,
  } = req.body;

  const transaction = await db.sequelize.transaction();

  try {
    // Simpan data utama penghasilan
    const penghasilan = await db.Penghasilan.create(
      {
        id_user,
        namaFile,
        namaPengeluaran,
        nominalPengeluaran,
        hasilTotal
      },
      { transaction }
    );

    const id_penghasilan = penghasilan.id;

    // Simpan data relasi jika ada
    if (biosolar && biosolar.length > 0) {
      const biosolarData = biosolar.map((item) => ({
        ...item,
        id_penghasilan,
      }));
      await db.PenghasilanBiosolar.bulkCreate(biosolarData, { transaction });
    }

    if (dexlite && dexlite.length > 0) {
      const dexliteData = dexlite.map((item) => ({
        ...item,
        id_penghasilan,
      }));
      await db.PenghasilanDexlite.bulkCreate(dexliteData, { transaction });
    }

    if (pertalite && pertalite.length > 0) {
      const pertaliteData = pertalite.map((item) => ({
        ...item,
        id_penghasilan,
      }));
      await db.PenghasilanPertalite.bulkCreate(pertaliteData, { transaction });
    }

    if (pertamax && pertamax.length > 0) {
      const pertamaxData = pertamax.map((item) => ({
        ...item,
        id_penghasilan,
      }));
      await db.PenghasilanPertamax.bulkCreate(pertamaxData, { transaction });
    }

    if (turbo && turbo.length > 0) {
      const turboData = turbo.map((item) => ({
        ...item,
        id_penghasilan,
      }));
      await db.PenghasilanTurbo.bulkCreate(turboData, { transaction });
    }

    // Commit transaksi
    await transaction.commit();

    res.status(201).json({
      status: "success",
      message: "Penghasilan with details has been successfully created.",
      data: penghasilan,
    });
  } catch (error) {
    // Rollback transaksi jika terjadi error
    await transaction.rollback();
    console.error("Error creating Penghasilan with details:", error);
    res
      .status(500)
      .json({ status: "error", message: "An unexpected error occurred." });
  }
};

// Fungsi untuk mengambil semua penghasilan dengan detail
exports.getAllPenghasilanWithDetails = async (req, res) => {
  try {
    const penghasilanList = await db.Penghasilan.findAll({
      include: [
        { model: db.PenghasilanBiosolar },
        { model: db.PenghasilanDexlite },
        { model: db.PenghasilanPertalite },
        { model: db.PenghasilanPertamax },
        { model: db.PenghasilanTurbo },
      ],
    });

    res.status(200).json({
      status: "success",
      message: "Successfully retrieved all Penghasilan with details.",
      data: penghasilanList,
    });
  } catch (error) {
    console.error("Error fetching Penghasilan with details:", error);
    res
      .status(500)
      .json({ status: "error", message: "An unexpected error occurred." });
  }
};

// Fungsi untuk mengambil penghasilan berdasarkan ID
exports.getPenghasilanById = async (req, res) => {
  const { id } = req.params;

  try {
    const penghasilan = await db.Penghasilan.findOne({
      where: { id },
      include: [
        { model: db.PenghasilanPertalite },
        { model: db.PenghasilanPertamax },
        { model: db.PenghasilanDexlite },
        { model: db.PenghasilanTurbo},
        { model: db.PenghasilanBiosolar},
      ],
    });

    if (!penghasilan) {
      return res.status(404).json({
        status: "error",
        message: `Penghasilan with ID ${id} not found.`,
      });
    }

    res.status(200).json({
      status: "success",
      message: `Successfully retrieved Penghasilan with ID ${id}.`,
      data: penghasilan,
    });
  } catch (error) {
    console.error("Error fetching Penghasilan by ID:", error);
    res
      .status(500)
      .json({ status: "error", message: "An unexpected error occurred." });
  }
};

// Fungsi untuk menghapus penghasilan berdasarkan ID
exports.deletePenghasilanById = async (req, res) => {
  const { id } = req.params;

  try {
    // Cari data penghasilan berdasarkan ID
    const penghasilan = await db.Penghasilan.findOne({
      where: { id },
      include: [
        { model: db.PenghasilanPertalite },
        { model: db.PenghasilanPertamax },
        { model: db.PenghasilanDexlite },
        { model: db.PenghasilanTurbo },
        { model: db.PenghasilanBiosolar },
      ],
    });

    // Jika data tidak ditemukan
    if (!penghasilan) {
      return res.status(404).json({
        status: "error",
        message: `Penghasilan with ID ${id} not found.`,
      });
    }

    // Hapus data terkait di tabel anak terlebih dahulu
    await Promise.all([
      db.PenghasilanPertalite.destroy({ where: { id_penghasilan: id } }),
      db.PenghasilanPertamax.destroy({ where: { id_penghasilan: id } }),
      db.PenghasilanDexlite.destroy({ where: { id_penghasilan: id } }),
      db.PenghasilanTurbo.destroy({ where: { id_penghasilan: id } }),
      db.PenghasilanBiosolar.destroy({ where: { id_penghasilan: id } }),
    ]);

    // Hapus data penghasilan
    await penghasilan.destroy();

    res.status(200).json({
      status: "success",
      message: `Penghasilan with ID ${id} and its related data have been successfully deleted.`,
    });
  } catch (error) {
    console.error("Error deleting Penghasilan by ID:", error);
    res.status(500).json({
      status: "error",
      message: "An unexpected error occurred while deleting Penghasilan.",
    });
  }
};
