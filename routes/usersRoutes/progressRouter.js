const Router = require('express');
const router = new Router();
const {progressControllers} = require('../../controllers');

router.put('/:userId', progressControllers.putProgress);
router.get('/:userId', progressControllers.getProgress);

module.exports = router;