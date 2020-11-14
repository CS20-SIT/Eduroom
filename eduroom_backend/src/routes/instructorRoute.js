const express = require('express');
const router = express.Router();
const { Register, GetProfile } = require('../controllers/instructorController');

router.post('/register', Register);
router.get('/profile', GetProfile);

module.exports = router;
