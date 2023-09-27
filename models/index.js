const User = require('./User');
const Card = require('./Card');
const Binder = require('./Binder');

User.hasMany(Card, {
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

Card.belongsTo(Binder, {
  foreignKey: "card_id",
});

Binder.hasMany(Card, {
  foreignKey: "card_id",
  onDelete: "CASCADE",
});



module.exports = { User, Card, Binder };