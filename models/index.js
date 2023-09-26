// const User = require('./User');
// const Card = require('./Card');

// Card.belongsTo(User, {
//   foreignKey: 'user_id'
// })

// const User = require('./User');
// const Card = require('./Post');
// const Comment = require('./Comment');

// // User have many Post
// User.hasMany(Post, {
//     foreignKey: 'user_id'
// });

// // Post belongsTo User
// Post.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });
// // Comment belongsTo User
// Comment.belongsTo(User, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });
// // Comment belongsTo Post
// Comment.belongsTo(Post, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// });
// // User have many Post
// User.hasMany(Comment, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });
// // User have many Post
// Post.hasMany(Comment, {
//     foreignKey: 'post_id',
//     onDelete: "cascade"
// })
// module.exports = { 
// User, 
// Post, 
// Comment, 
// };

// module.exports = {User}