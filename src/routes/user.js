const express = require('express');
const router = express.Router();

// GET /users - List all users (sample endpoint)
router.get('/', (req, res) => {
  res.json({ message: 'List of users would go here.' });
});

// POST /users - Create a new user
router.post('/', (req, res) => {
  const user = req.body; // In real life, you'd validate and store this
  res.status(201).json({ message: 'User created', user });
});

module.exports = router;
