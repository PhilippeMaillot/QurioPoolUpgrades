const express = require('express');
const router = express.Router();
const { Armour } = require('../models');

router.get('/', async (req, res) => {
  const data = await Armour.findAll();
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const armour = await Armour.findByPk(req.params.id);
  res.json(armour);
});

module.exports = router;
