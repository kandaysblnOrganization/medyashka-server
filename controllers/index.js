//USERS CONTROLLERS
const usersControllers = require('./usersControllers/usersControllers');
const progressControllers = require('./usersControllers/progressControllers');
const usersImagesControllers = require('./usersControllers/usersImageControllers');

//BOOKS CONTROLLER
const firstBookControllers = require('./booksControllers/firstBookController');
const secondBookControllers = require('./booksControllers/secondBookController');
const thirdBookControllers = require('./booksControllers/thirdBookController');
const fourthBookControllers = require('./booksControllers/fourthBookController');

module.exports = {
    //USER CONTROLLERS
    usersControllers,
    progressControllers,
    usersImagesControllers,

    //BOOKS CONTROLLERS
    firstBookControllers,
    secondBookControllers,
    thirdBookControllers,
    fourthBookControllers,
}