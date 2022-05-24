const Router = require('express');
const router = new Router();
const {
    firstBookControllers
} = require('../../controllers');

router.get('/', firstBookControllers.getBook);

module.exports = router;