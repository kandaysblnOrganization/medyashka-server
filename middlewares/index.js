const errorHandlerMiddleware = require('./ErrorsMiddlewares/ErrorHandlingMiddleware');
const authHandlerMiddleware = require('./UserMiddleware/AuthMiddleware');

module.exports = {
    errorHandlerMiddleware,
    authHandlerMiddleware
}
