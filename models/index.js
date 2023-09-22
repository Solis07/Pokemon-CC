const User = require('./User');
const Card = require('./card');

Card.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = {User, Card}