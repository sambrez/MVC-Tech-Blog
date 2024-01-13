const Comment = require('./Comment');
const Post = require('./Post');
const User = require('./User');

Comment.belongsTo(User, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'RESTRICT'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'RESTRICT'
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: 'RESTRICT'
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'RESTRICT'
});

module.exports = { Comment, Post, User} 
