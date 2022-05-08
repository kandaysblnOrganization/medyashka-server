const Router = require('express');
const router = new Router();
const {progressControllers} = require('../../controllers');
const {authHandlerMiddleware} = require("../../middlewares");

router.put('/', authHandlerMiddleware, progressControllers.putProgress);
router.get('/', authHandlerMiddleware, progressControllers.getProgress);

module.exports = router;