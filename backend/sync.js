const { sequelize } = require('./models');

(async () => {
  try {
    await sequelize.sync({ force: true }); // force: true supprime et recrée les tables
    console.log('✅ Tables créées.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Erreur de synchronisation :', err);
    process.exit(1);
  }
})();
