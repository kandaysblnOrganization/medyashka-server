const Router = require('express');
const router = new Router();
const {usersControllers} = require('../../controllers');
const {authHandlerMiddleware} = require('../../middlewares');

router.post('/registration', usersControllers.registration);
router.post('/authorization', usersControllers.authorization);
router.get("/auth", authHandlerMiddleware, usersControllers.auth);

module.exports = router;