module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Augmentation', {
    augmentation_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id: DataTypes.INTEGER, // identifiant de la stat (ex. Defense+, Slot+, etc.)
    pool_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    lv1: DataTypes.INTEGER,
    lv2: DataTypes.INTEGER,
    lv3: DataTypes.INTEGER,
    lv1_percent: DataTypes.FLOAT,
    lv2_percent: DataTypes.FLOAT,
    lv3_percent: DataTypes.FLOAT,
    cost: DataTypes.INTEGER
  }, { timestamps: false });
};
