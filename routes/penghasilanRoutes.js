const express = require('express');
const router = express.Router();
const penghasilanController = require('../controllers/penghasilanController');

// Route untuk membuat penghasilan dan data terkait
router.post('/create', penghasilanController.createPenghasilanWithDetails);
router.get('/', penghasilanController.getAllPenghasilanWithDetails);
router.get('/:id',penghasilanController.getPenghasilanById)
router.delete('/:id',penghasilanController.deletePenghasilanById)

module.exports = router;
