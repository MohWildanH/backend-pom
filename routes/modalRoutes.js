const express = require('express');
const router = express.Router();
const modalController = require('../controllers/modalController');

// Route untuk membuat penghasilan dan data terkait
router.post('/create', modalController.createModalWithDetails);
router.get('/', modalController.getAllModalWithDetails);
router.get('/:id',modalController.getModalById)
router.delete('/:id',modalController.deleteModalWithDetails)

module.exports = router;
