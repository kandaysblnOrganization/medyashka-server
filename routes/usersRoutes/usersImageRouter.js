const Router = require('express');
const router = new Router();
const {usersImagesControllers} = require('../../controllers');

router.put('/:userId', usersImagesControllers.putUserImage);
router.get('/:userId', usersImagesControllers.getUserImage);

module.exports = router;