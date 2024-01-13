const { Post } = require('../models');

const postsdata = [
    {},
    {},
    {}
];

const seedPosts = () => Post.bulkCreate(postsdata);

module.exports = seedPosts;