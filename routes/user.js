const { Router } = require('express')

const router = Router()
const users = []
router.get('/',(req, res)=>{
    res.render('UserHome',{pageTitle:"UserHome",users})
})
router.get('/addUser',(req, res)=>{
    res.render('AddUser',{pageTitle:"AddUser"})
})
router.post('/addUser',(req, res)=>{
    users.push({name:req.body.username})
    res.redirect('/')
})

module.exports = router