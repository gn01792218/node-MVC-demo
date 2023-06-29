const users = []  //假的db資料=>也封裝進controller中

exports.getUserHomePage = (req, res)=>{
    res.render('UserHome',{pageTitle:"UserHome",users})
}
exports.getAddUserPage = (req, res) => {
    res.render('AddUser',{pageTitle:"AddUser"})
}
exports.postAddUser = (req, res)=>{
    users.push({name:req.body.username})  //這一個邏輯應該要封裝進controller中
    res.redirect('/')
}