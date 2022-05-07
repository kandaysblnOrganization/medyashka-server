const Router = require('express');
const router = new Router();
const {usersControllers} = require('../../controllers');

router.post('/registration', usersControllers.registration);
router.post('/authorization', usersControllers.authorization);
router.get("/auth", usersControllers.auth);

module.exports = router;