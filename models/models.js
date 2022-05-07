const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const users = sequelize.define("users", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    full_name: {type: DataTypes.STRING, allowNull: false},
    position: {type: DataTypes.STRING, allowNull: false},
});

const usersImage = sequelize.define(`users_image`, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    avatar: {type: DataTypes.STRING, defaultValue: null},
})

const progress = sequelize.define("progress", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    percent_progress: {type: DataTypes.DOUBLE, defaultValue: 0},
    first_book_last_page: {type: DataTypes.INTEGER, defaultValue: 1},
    second_book_last_page: {type: DataTypes.INTEGER, defaultValue: 1},
    third_book_last_page: {type: DataTypes.INTEGER, defaultValue: 1},
    fourth_book_last_page: {type: DataTypes.INTEGER, defaultValue: 1},
})

const firstBook = sequelize.define("first_books", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    page_foreword: {type: DataTypes.TEXT, defaultValue: null},
    foreword_author: {type: DataTypes.STRING, defaultValue: null},
    page_chapter: {type: DataTypes.STRING, defaultValue: null},
    page_title: {type: DataTypes.STRING, defaultValue: null},
    page_text: {type: DataTypes.TEXT, defaultValue: null},
    page_img: {type: DataTypes.STRING, defaultValue: null},
    page_message: {type: DataTypes.TEXT, defaultValue: null},
})

const secondBook = sequelize.define("second_books", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    page_foreword: {type: DataTypes.TEXT, defaultValue: null},
    foreword_author: {type: DataTypes.STRING, defaultValue: null},
    page_chapter: {type: DataTypes.STRING, defaultValue: null},
    page_title: {type: DataTypes.STRING, defaultValue: null},
    page_text: {type: DataTypes.TEXT, defaultValue: null},
    page_img: {type: DataTypes.STRING, defaultValue: null},
    page_message: {type: DataTypes.TEXT, defaultValue: null},
})

const thirdBook = sequelize.define("third_books", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    page_foreword: {type: DataTypes.TEXT, defaultValue: null},
    foreword_author: {type: DataTypes.STRING, defaultValue: null},
    page_chapter: {type: DataTypes.STRING, defaultValue: null},
    page_title: {type: DataTypes.STRING, defaultValue: null},
    page_text: {type: DataTypes.TEXT, defaultValue: null},
    page_img: {type: DataTypes.STRING, defaultValue: null},
    page_message: {type: DataTypes.TEXT, defaultValue: null},
})

const fourthBook = sequelize.define("fourth_books", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    page_foreword: {type: DataTypes.TEXT, defaultValue: null},
    foreword_author: {type: DataTypes.STRING, defaultValue: null},
    page_chapter: {type: DataTypes.STRING, defaultValue: null},
    page_title: {type: DataTypes.STRING, defaultValue: null},
    page_text: {type: DataTypes.TEXT, defaultValue: null},
    page_img: {type: DataTypes.STRING, defaultValue: null},
    page_message: {type: DataTypes.TEXT, defaultValue: null},
})

users.hasOne(usersImage);
usersImage.belongsTo(users);

users.hasOne(progress);
progress.belongsTo(users);

module.exports = {
    users,
    usersImage,
    progress,
    firstBook,
    secondBook,
    thirdBook,
    fourthBook,
}