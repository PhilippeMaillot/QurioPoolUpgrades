const { sequelize } = require('./models');

async function runImports() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to DB.');

    await require('./seedSkills')();
    await require('./seedArmours')();
    await require('./seedAugmentations')();

    console.log('🎉 All data imported successfully.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Import failed:', error);
    process.exit(1);
  }
}

runImports();
