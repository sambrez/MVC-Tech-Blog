const { Comment } = require('../models');

const commentsdata = [
    {},
    {},
    {}
];

const seedComments = () => Comment.bulkCreate(commentsdata);

module.exports = seedComments;