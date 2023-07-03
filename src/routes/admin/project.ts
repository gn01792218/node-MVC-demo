import { Router } from 'express'
import { 
    getProjectHomePage,
} from'../../controllers/projectController'

const router = Router()

router.get('/', getProjectHomePage)
export default router