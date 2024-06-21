const express = require('express');
const router = express.Router();
const Module = require('../models/Module');

// GET /api/modules
router.get('/', async (req, res) => {
  try {
    const modules = await Module.find();
    res.json(modules);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
