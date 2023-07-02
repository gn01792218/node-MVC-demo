import { Request, Response } from 'express'
export const getNotFoundPage = (req:Request, res:Response) => {
    res.status(404).render('404',{pageTitle:'404'})
}