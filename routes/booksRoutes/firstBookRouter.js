const Router = require('express');
const router = new Router();
const {
    firstBookControllers
} = require('../../controllers');

router.get('/first_book', firstBookControllers.getBook);

module.exports = router;