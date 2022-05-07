const Router = require('express');
const router = new Router();

const usersRouter = require('./usersRoutes/usersRouter');
const progressRouter = require('./usersRoutes/progressRouter');
const usersImageRouter = require('./usersRoutes/usersImageRouter');

router.use('/users', usersRouter);
router.use('/progress', progressRouter);
router.use('/user-image', usersImageRouter);

module.exports = router;