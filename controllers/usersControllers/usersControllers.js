const ApiErrors = require('../../errors/ApiErrors');
const {users, progress, usersImage} = require('../../models/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateJwt = (id, email, full_name, position) => {
    return jwt.sign(
        {id, email, full_name, position},
        process.env.SECRET_KEY,
        {expiresIn: "24h"},
    );
}

class UsersControllers {
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
        const userImage = await usersImage.create({userId: user.id});
        const token = generateJwt(user.id, user.email, user.full_name, user.position)

        return res.json({token})
    };
    authorization = async (req, res, next) => {
        const {email, password} = req.body;
        const user = await users.findOne({where: {email}});
        if (!user) {
            return next(ApiErrors.internal("E-Mail не зарегистрирован"));
        }

        let comparePassword = bcrypt.compareSync(password, user.password);
        if (!comparePassword) {
            return next(ApiErrors.internal('Указан неправильный пароль'));
        }

        const token = generateJwt(user.id, user.email, user.full_name, user.position)
        return res.json({token})
    };
    auth = async (req, res, next) => {
        const {user} = req;
        const token = generateJwt(user.id, user.email, user.full_name, user.position);

        return res.json({token});
    };
}

module.exports = new UsersControllers();