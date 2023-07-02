
import { Router } from 'express'
import { 
    getNotFoundPage,
} from '../controllers/errorController'

const router = Router()

router.get('*', getNotFoundPage)

export default router