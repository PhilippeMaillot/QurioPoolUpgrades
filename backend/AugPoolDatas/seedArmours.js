const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { Armour } = require('./models');

module.exports = async function seedArmours() {
    const filePath = path.join(__dirname, 'data', 'Parsed_Armour_Sets.csv');
    const results = [];

    fs.createReadStream(filePath)
        .pipe(csv({ separator: ';' }))
        .on('data', (data) => {
            results.push({
                id: parseInt(data.id),
                name: data.name,
                pool_id: parseInt(data.pool_id),
                budget: parseInt(data.budget)
            });
        })
        .on('end', async () => {
            await Armour.bulkCreate(results);
            console.log('✅ Armours imported.');
        });
};
