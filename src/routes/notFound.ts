
import { Router } from 'express'
import { 
    getNotFoundPage,
} from '../controllers/errorController.js'

const router = Router()

router.get('*', getNotFoundPage)

export default router