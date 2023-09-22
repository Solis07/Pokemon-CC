const sequelize = require('../config/connection');
const { User } = require('../models')

const userData = [
  {

  },
]

const userSeed = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeed;