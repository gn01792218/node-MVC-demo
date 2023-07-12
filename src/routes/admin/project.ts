import { Router } from 'express'
import { 
    getProjectHomePage,
    getCreateProjectPage,
    getEditPage,
    postEditPage,
    postCreateProjectPage,
    deleteProject
} from'../../controllers/projectController.js'

const router = Router()

router.get('/', getProjectHomePage)

router.get('/create', getCreateProjectPage)
router.post('/create', postCreateProjectPage)

router.get('/edit/:id', getEditPage)
router.post('/edit', postEditPage)

router.get('/delete/:id', deleteProject)
export default router