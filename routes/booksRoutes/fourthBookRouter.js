const Router = require('express');
const router = new Router();
const {fourthBookControllers} = require('../../controllers');

router.get('/', fourthBookControllers.getBook);

module.exports = router;