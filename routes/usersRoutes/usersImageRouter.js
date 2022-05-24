const Router = require('express');
const router = new Router();
const {usersImagesControllers} = require('../../controllers');
const {authHandlerMiddleware} = require("../../middlewares");

router.put('/', authHandlerMiddleware, usersImagesControllers.putUserImage);

module.exports = router;