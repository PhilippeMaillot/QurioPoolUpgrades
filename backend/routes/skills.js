const express = require('express');
const router = express.Router();
const { Skill } = require('../models');

router.get('/', async (req, res) => {
  const data = await Skill.findAll();
  res.json(data);
});

module.exports = router;
