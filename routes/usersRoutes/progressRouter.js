const Router = require('express');
const router = new Router();
const {progressControllers} = require('../../controllers');
const {authHandlerMiddleware} = require("../../middlewares");

router.put('/:userId', authHandlerMiddleware, progressControllers.putProgress);
router.get('/:userId', authHandlerMiddleware, progressControllers.getProgress);

module.exports = router;