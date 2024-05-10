const express = require('express');
const router = express.Router();
const { register, login,me } = require('../Controller/authController');

router.post('/register', register);
router.post("/login", login)
router.post("/me", me)

module.exports = router;