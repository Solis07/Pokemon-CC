const sequelize = require('../config/connection')

const seedDb = async () => {
  await sequelize.syn({ force: true });

  process.exit(0);
};

seedDb();