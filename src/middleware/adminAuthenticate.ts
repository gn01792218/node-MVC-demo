import { Request, Response, NextFunction } from "express"

export const authenticate = (req:Request, res:Response, next:NextFunction) =>{
    if(!req.session.isLogin) return res.redirect("/admin")
    next()
}