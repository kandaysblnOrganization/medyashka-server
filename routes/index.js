const Router = require('express');
const router = new Router();

const usersRouter = require('./usersRouters/usersRouter');

router.use('/users', usersRouter);

module.exports = router;