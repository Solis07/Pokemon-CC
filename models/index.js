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

User.hasOne(Binder, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
})

Binder.hasMany(Card, {
  foreignKey: "card_id",
  onDelete: "CASCADE",
});



module.exports = { User, Card, Binder };