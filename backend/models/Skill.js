module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Skill', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    cost: DataTypes.INTEGER
  }, { timestamps: false });
};
