
import { Router, Request, Response } from 'express'

const router = Router()

router.get('/admin', (req:Request, res:Response) => {
    res.render('admin/index',{pageTitle:'ADMIN首頁',layout:'layouts/adminLayout'})
})

export default router