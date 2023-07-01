//引入modles和repositpry
const User = require('../models/user')
const UserRepository = require("../repositories/userRepository")

//初始化
const userRepository = new UserRepository()

exports.getUserHomePage = (req, res)=>{
    res.render('UserHome',{pageTitle:"UserHome",users:userRepository.getAll()})
}
exports.getAddUserPage = (req, res) => {
    res.render('AddUser',{pageTitle:"AddUser"})
}
exports.postAddUser = (req, res)=>{
    const user = new User(req.body.username)
    userRepository.add(user)
    res.redirect('/')
}