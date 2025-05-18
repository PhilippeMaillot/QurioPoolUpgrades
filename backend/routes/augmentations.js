const express = require('express');
const router = express.Router();
const { Augmentation } = require('../models');

router.get('/', async (req, res) => {
  const data = await Augmentation.findAll();
  res.json(data);
});

router.get('/pool/:pool_id', async (req, res) => {
  const data = await Augmentation.findAll({ where: { pool_id: req.params.pool_id } });
  res.json(data);
});

module.exports = router;
