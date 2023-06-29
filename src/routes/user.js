const { Router } = require('express')
const { 
    getUserHomePage,
    getAddUserPage,
    postAddUser
} = require('../controllers/userController')

const router = Router()

router.get('/', getUserHomePage)
router.get('/addUser',getAddUserPage)
router.post('/addUser', postAddUser)

module.exports = router