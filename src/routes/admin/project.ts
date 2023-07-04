import { Router } from 'express'
import { 
    getProjectHomePage,
    getCreateProjectPage,
    postCreateProjectPage
} from'../../controllers/projectController'

const router = Router()

router.get('/', getProjectHomePage)

router.get('/createProject',getCreateProjectPage)
router.post('/createProject',postCreateProjectPage)
export default router