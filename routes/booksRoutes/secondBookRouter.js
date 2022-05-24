const Router = require('express');
const router = new Router();
const {secondBookControllers} = require('../../controllers');

router.get('/second_book', secondBookControllers.getBook);

module.exports = router;