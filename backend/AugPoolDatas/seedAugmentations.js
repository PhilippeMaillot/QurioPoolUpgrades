const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { Augmentation } = require('./models');

const csvFiles = [
  'AugPool1_clean_reordered.csv',
  'AugPool2_clean_reordered.csv',
  'AugPool3_clean_reordered.csv',
  'AugPool4_clean_reordered.csv',
  'AugPool5_clean_reordered.csv',
  'AugPool6_clean_reordered.csv',
  'AugPool13_clean_reordered.csv'
];

module.exports = async function seedAugmentations() {
  const allData = [];

  for (const file of csvFiles) {
    const filePath = path.join(__dirname, 'data', file);
    const results = [];

    await new Promise((resolve) => {
      fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => {
          results.push({
            id: parseInt(data.id),
            pool_id: parseInt(data.AugPool),
            description: data.Desc,
            lv1: parseInt(data.Lv1),
            lv2: parseInt(data.Lv2),
            lv3: parseInt(data.Lv3),
            lv1_percent: parseFloat(data['Lv1%']),
            lv2_percent: parseFloat(data['Lv2%']),
            lv3_percent: parseFloat(data['Lv3%']),
            cost: parseInt(data.Cost)
          });
        })
        .on('end', () => {
          allData.push(...results);
          resolve();
        });
    });
  }

  await Augmentation.bulkCreate(allData);
  console.log('✅ Augmentations imported.');
};
