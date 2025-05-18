const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { Skill } = require('./models');

module.exports = async function seedSkills() {
  const filePath = path.join(__dirname, 'data', 'Skills_clean.csv');
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => {
      results.push({
        id: parseInt(data.skill_id),
        name: data.name,
        cost: parseInt(data.cost)
      });
    })
    .on('end', async () => {
      await Skill.bulkCreate(results);
      console.log('✅ Skills imported.');
    });
};
