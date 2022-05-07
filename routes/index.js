const Router = require('express');
const router = new Router();

const {
    usersRouter,
    progressRouter,
    usersImageRouter
} = require('./usersRoutes');

const {
    firstBook,
    secondBook,
    thirdBook,
    fourthBook
} = require('./booksRoutes');

router.use('/users', usersRouter);
router.use('/progress', progressRouter);
router.use('/user-image', usersImageRouter);
router.use('/first_book', firstBook);
router.use('/second_book', secondBook);
router.use('/third_book', thirdBook);
router.use('/fourth_book', fourthBook);

module.exports = router;