const Router = require('express');
const router = new Router();
const {usersImagesControllers} = require('../../controllers');
const {authHandlerMiddleware} = require("../../middlewares");

router.put('/:userId', authHandlerMiddleware, usersImagesControllers.putUserImage);
router.get('/:userId', authHandlerMiddleware, usersImagesControllers.getUserImage);

module.exports = router;