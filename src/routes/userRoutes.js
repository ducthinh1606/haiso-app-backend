const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('GET /api/users');
});

router.post('/', (req, res) => {
  res.send('POST /api/users');
});

router.get('/:id', (req, res) => {
  const userId = req.params.id;

  res.send(`GET /api/users/${userId}`);
});

router.put('/:id', (req, res) => {
  const userId = req.params.id;

  res.send(`PUT /api/users/${userId}`);
});

router.delete('/:id', (req, res) => {
  const userId = req.params.id;

  res.send(`DELETE /api/users/${userId}`);
});

module.exports = router;
