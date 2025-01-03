const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route untuk mendapatkan semua user
router.post('/create', userController.create); 
router.post('/login', userController.login); 
// router.get('/', userController.getAll);  // GET untuk mendapatkan semua user
// router.get('/:id', userController.getById);  // GET untuk mendapatkan user berdasarkan ID
// router.put('/:id', userController.update);  // PUT untuk update user berdasarkan ID
router.delete('/:id', userController.delete); 

module.exports = router;