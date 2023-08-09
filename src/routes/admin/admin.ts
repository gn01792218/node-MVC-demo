
import { Router } from 'express'
import { 
    getSignupPage, 
    postSignup, 
    getLoginPage, 
    postLogin, 
    postLogout, 
    getAdminHomePage 
} from '../../controllers/adminController.js'

const router = Router()
router.get('/signup', getSignupPage)
router.post('/signup', postSignup)

router.get('/login', getLoginPage)
router.post('/login', postLogin)

router.post('/logout', postLogout)

router.get('/', getAdminHomePage)

export default router