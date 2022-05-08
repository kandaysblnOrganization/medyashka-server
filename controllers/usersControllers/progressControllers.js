const {
    progress,
    firstBook,
    secondBook,
    thirdBook,
    fourthBook
} = require('../../models/models');
const ApiError = require('../../errors/ApiErrors');

class ProgressControllers {
    putProgress = async (req, res, next) => {
        const {id} = req.user;
        const {
            first_book_last_page,
            second_book_last_page,
            third_book_last_page,
            fourth_book_last_page,
        } = req.body;

        //Блок для расчета процента прогресса------------------------------------------------------------------------------
        const firstBookTotalPage = await firstBook.count({col: "id"});
        const secondBookTotalPage = await secondBook.count({col: "id"});
        const thirdBookTotalPage = await thirdBook.count({col: "id"});
        const fourthBookTotalPage = await fourthBook.count({col: "id"});
        const totalPage = +firstBookTotalPage + +secondBookTotalPage + +thirdBookTotalPage + +fourthBookTotalPage;
        const onePercent = totalPage / 100;
        const pagesRead = +first_book_last_page + +second_book_last_page + +third_book_last_page + +fourth_book_last_page;
        const percentProgress = +pagesRead / +onePercent;
        //-------------------------------------------------------------------------------------------------------------------

        const progresses = await progress.findOne({where: {userId: id}})
            .then(res => {
                if (!res) {
                    return ApiError.badRequest('Данные о прогрессе не найдены');
                }
                const body = {
                    percent_progress: percentProgress,
                    first_book_last_page,
                    second_book_last_page,
                    third_book_last_page,
                    fourth_book_last_page,
                }
                return res.update(body);
            })

        return res.json(progresses);
    };
    getProgress = async (req, res, next) => {
        const {id} = req.user;

        const progresses = await progress.findOne({
            where: {userId: id},
        })

        return res.json(progresses);
    };
}

module.exports = new ProgressControllers();