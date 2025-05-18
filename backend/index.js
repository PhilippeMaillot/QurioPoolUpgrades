const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use('/api/armours', require('./routes/armours'));
app.use('/api/augmentations', require('./routes/augmentations'));
app.use('/api/skills', require('./routes/skills'));

sequelize.authenticate().then(() => {
  console.log('DB connected');
  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
});
