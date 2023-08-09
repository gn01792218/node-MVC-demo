import { Router } from 'express'
import { 
    getUserHomePage,
    getAddUserPage,
    postAddUser
} from'../../controllers/userController.js'

const router = Router()

router.get('/', getUserHomePage)
router.get('/addUser', getAddUserPage)
router.post('/addUser', postAddUser)

export default router