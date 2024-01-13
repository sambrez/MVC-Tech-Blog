const { User } = require('../models');

const usersdata = [
    {},
    {},
    {}
];

const seedUsers = () => User.bulkCreate(usersdata);

module.exports = seedUsers;