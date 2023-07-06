const express = require('express');
const AuthController = require('../app/controllers/AuthController')
const router = express.Router();

const authController = new AuthController();

router.post('/login', (req, res) => {
  res.send('POST /api/users');
});

router.post('/register', (req, res) => {
  authController.register(req, res);
});

module.exports = router;
