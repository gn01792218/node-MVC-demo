"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postAddUser = exports.getAddUserPage = exports.getUserHomePage = void 0;
const userReposiitory_1 = require("../repositories/userReposiitory");
//初始化
const userRepository = new userReposiitory_1.UserRepository();
const getUserHomePage = (req, res) => {
    res.render('UserHome', { pageTitle: "UserHome", users: userRepository.getAll() });
};
exports.getUserHomePage = getUserHomePage;
const getAddUserPage = (req, res) => {
    res.render('AddUser', { pageTitle: "AddUser" });
};
exports.getAddUserPage = getAddUserPage;
const postAddUser = (req, res) => {
    const user = {
        name: req.body.username
    };
    userRepository.add(user);
    res.redirect('/');
};
exports.postAddUser = postAddUser;
