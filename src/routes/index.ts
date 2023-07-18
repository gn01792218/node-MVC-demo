
import { Router, Request, Response } from 'express'
import adminRoute from './admin/index.js'
import notFountRoute from "../routes/notFound.js";
const router = Router()

router.get('/', (req:Request, res:Response) => {
    res.render('index',{pageTitle:'首頁'})
})
router.use('/admin',adminRoute)
router.use(notFountRoute);
export default router