const uuid = require("uuid");
const ApiErrors = require('../errors/ApiErrors');
const {users, progress,} = require('../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class usersControllers {
    registration = async (req, res, next) => {
        const {email, password, full_name, position} = req.body;
        if (!email || !password) {
            return next(ApiErrors.badRequest("Некорректные данные"));
        }
        const candidate = await users.findOne({where: {email}})
        if (candidate) {
            return next(ApiErrors.badRequest("Пользователь с таким E-Mail уже существует"));
        }
        const hashPassword = await bcrypt.hash(password, 5);
        const user = await users.create({email, password: hashPassword, full_name, position});
        const userProgress = await progress.create({userId: user.id});
        const token = jwt.sign(
            {id: user.id, email},
            process.env.SECRET_KEY,
            {expiresIn: "24h"}
        );

        return res.json({token})
    };
    authorization = async (req, res) => {

    }
    auth = async (req, res, next) => {
        const {id} = req.query;

        if (!id) {
            return next(ApiErrors.badRequest("Не задан ID"));
        }
    };
}

module.exports = new usersControllers();