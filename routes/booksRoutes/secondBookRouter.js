const Router = require('express');
const router = new Router();
const {secondBookControllers} = require('../../controllers');

router.get('/', secondBookControllers.getBook);

module.exports = router;