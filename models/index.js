const User = require('./User');
const Card = require('./Card');
const Binder = require('./Binder');

Card.hasMany(User, {
   foreignKey: "user_id",
});

User.hasMany(Cards, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Binder.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Binder, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

module.exports = { User, Card, Binder };