const {fourthBook} = require("../../models/models");
const ApiError = require("../../errors/ApiErrors");

class FourthBookController {
    getBook = async (req, res, next) => {
        try {
            let {page} = req.query;
            page = +page || 1;
            const limit = 1;
            const offset = page * limit - limit;
            const order = [
                ["id", "ASC"]
            ];

            let book = await fourthBook.findAndCountAll({limit, offset, order})
                .then(res => {
                    if (!res) {
                        return ApiError.badRequest("Страница не существует");
                    }
                    if (res.rows.length === 0) {
                        return ApiError.badRequest("Страница не существует");
                    }

                    return res;
                })

            return res.json(book);
        } catch (err) {
            return next(ApiError.badRequest(err.message));
        }
    };
}

module.exports = new FourthBookController();