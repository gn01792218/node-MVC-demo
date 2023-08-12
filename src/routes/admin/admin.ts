
import { Router } from 'express'
import { signUpValidate } from '../../middleware/validators/adminValidator.js'
import { 
    getSignupPage, 
    postSignup, 
    getLoginPage, 
    postLogin, 
    postLogout, 
    getAdminHomePage 
} from '../../controllers/adminController.js'
import { validateErrorHandle } from '../../middleware/errorHandle.js'

const router = Router()

router.get('/signup', getSignupPage)
router.post('/signup', signUpValidate, validateErrorHandle, postSignup)

router.get('/login', getLoginPage)
router.post('/login', postLogin)

router.post('/logout', postLogout)

router.get('/', getAdminHomePage)

export default router