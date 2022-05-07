const {
    firstBook
} = require('../../models/models');
const ApiError = require('../../errors/ApiErrors');

class FirstBookController {
    getBook = async (req, res, next) => {
        let {page} = req.query;
        page = +page || 1;
        const limit = 1;
        const offset = page * limit - limit;
        const order = [
            ["id", "ASC"]
        ];

        let book = await firstBook.findAndCountAll({limit, offset, order});

        return (res.json(book));
    };
}

module.exports = new FirstBookController();