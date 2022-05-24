const Router = require('express');
const router = new Router();
const {fourthBookControllers} = require('../../controllers');

router.get('/fourth_book', fourthBookControllers.getBook);

module.exports = router;