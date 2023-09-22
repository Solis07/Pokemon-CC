const sequelize = require('../config/connection');
const userSeed = require('./user-seed');
const cardSeed = require('./card-seed');

const seedDb = async () => {
  await sequelize.syn({ force: true });
  await userSeed();
  await cardSeed();
  process.exit(0);
};

seedDb();