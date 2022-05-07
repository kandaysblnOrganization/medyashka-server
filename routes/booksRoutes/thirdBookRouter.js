const Router = require('express');
const router = new Router();
const {thirdBookControllers} = require('../../controllers');

router.get('/', thirdBookControllers.getBook);

module.exports = router;