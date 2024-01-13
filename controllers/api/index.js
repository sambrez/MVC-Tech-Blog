const router = require('express').Router();
const userRoutes = require('./userRoutes');
const bpRoutes = require('./blogPostRoutes');
const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/posts', bpRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
