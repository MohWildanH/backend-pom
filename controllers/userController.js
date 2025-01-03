const dotenv = require('dotenv');
dotenv.config(); // Load .env file
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../models');

class UserController {
  static async create(req, res) {
    const { name, userName, password } = req.body;

    // Validasi input
    if (!name || !userName || !password) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Name, username, dan password harus diisi',
        data: null,
        error: null,
      });
    }

    try {
      // Cek apakah username sudah ada di database
      const existingUser = await User.findOne({ where: { userName } });
      if (existingUser) {
        return res.status(400).json({
          status: 'error',
          code: 400,
          message: 'Username sudah digunakan',
          data: null,
          error: null,
        });
      }

      // Enkripsi password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(password, 10);

      // Membuat user baru di database
      const newUser = await User.create({
        name,
        userName,
        password: hashedPassword, // Menyimpan password yang sudah terenkripsi
      });

      // Mengirimkan respons sukses
      res.status(201).json({
        status: 'success',
        code: 201,
        message: 'User berhasil dibuat',
        data: {
          id: newUser.id,
          name: newUser.name,
          userName: newUser.userName,
          password: newUser.password,
        },      
      });

    } catch (error) {
      console.error('Error saat membuat user:', error.message);
      res.status(500).json({
        status: 'error',
        code: 500,
        message: 'Gagal membuat user',
        data: null,
        error: error.message,
      });
    }
  }
  
  static async login(req, res) {
    const { userName, password } = req.body;

    // Get username and password from .env
    const storedUserName = process.env.USERNAME;
    const storedPassword = process.env.PASSWORD;

    // Validate if the provided username and password match the ones in .env
    if (!userName || !password) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'Username and password are required',
        error: error.message,
      });
    }

    // Check if username and password match .env
    if (userName !== storedUserName || password !== storedPassword) {
      return res.status(401).json({
        status: 'error',
        code: 401,
        message: 'Invalid credentials',
        data: null,
        error: null,
      });
    }

    try {
      // Fetch the user from the database to get the `id_user`
      const user = await User.findOne({ where: { userName } });

      if (!user) {
        return res.status(404).json({
          status: 'error',
          code: 404,
          message: 'User not found in the database',
          data: null,
          error: null,
        });
      }

      // Generate JWT token with the user's ID and username
      const token = jwt.sign(
        { id: user.id, userName: user.userName },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      // Return success response with the user data and token
      res.status(200).json({
        status: 'success',
        code: 200,
        message: 'Login successful',
        data: { userName, id_user: user.id, token },
      });

    } catch (error) {
      res.status(500).json({
        status: 'error',
        code: 500,
        message: 'Failed to login',
        error: error.message,
      });
    }
  }

  static async delete(req, res) {
    const { id } = req.params;

    // Validasi ID
    if (isNaN(id)) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: 'ID user tidak valid',
        data: null,
        error: null,
      });
    }

    try {
      // Mencari user berdasarkan ID
      const user = await User.findByPk(id);

      // Jika user tidak ditemukan
      if (!user) {
        return res.status(404).json({
          status: 'error',
          code: 404,
          message: 'User tidak ditemukan',
          data: null,
          error: null,
        });
      }

      // Menghapus user
      await User.destroy({ where: { id } });

      // Mengirimkan respons sukses setelah user berhasil dihapus
      res.status(204).json({
        status: 'success',
        code: 204,
        message: 'User berhasil dihapus',
        data: null,
        error: null,
      });

    } catch (error) {
      console.error('Error saat menghapus user:', error.message);
      res.status(500).json({
        status: 'error',
        code: 500,
        message: 'Gagal menghapus user',
        data: null,
        error: error.message,
      });
    }
  }
}

module.exports = UserController;
