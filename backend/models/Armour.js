module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Armour', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    pool_id: DataTypes.INTEGER,
    budget: DataTypes.INTEGER
  }, { timestamps: false });
};
