const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'mysql'
});

const Skill = require('./Skill')(sequelize, DataTypes);
const Armour = require('./Armour')(sequelize, DataTypes);
const Augmentation = require('./Augmentation')(sequelize, DataTypes);

module.exports = { sequelize, Skill, Armour, Augmentation };
