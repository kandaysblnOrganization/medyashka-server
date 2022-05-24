const Router = require('express');
const router = new Router();
const {thirdBookControllers} = require('../../controllers');

router.get('/third_book', thirdBookControllers.getBook);

module.exports = router;