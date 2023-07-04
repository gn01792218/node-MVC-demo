import { Router } from 'express'
import { 
    getProjectHomePage,
    getCreateProjectPage,
    postCreateProjectPage,
    deleteProject
} from'../../controllers/projectController'

const router = Router()

router.get('/', getProjectHomePage)

router.get('/create', getCreateProjectPage)
router.post('/create', postCreateProjectPage)

router.get('/delete/:id', deleteProject)
export default router