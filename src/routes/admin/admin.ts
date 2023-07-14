
import { Router } from 'express'
import { getLoginPage, postLogin, getAdminHomePage } from '../../controllers/adminController.js'

const router = Router()
router.get('/login',getLoginPage)
router.post('/login', postLogin)
router.get('/', getAdminHomePage)

export default router