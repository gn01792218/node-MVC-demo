import { Request, Response, NextFunction } from "express"

// 在這裡面註冊的locals變數，皆可以直接在view中取用
// 無須於render function 時在傳入數值唷!!!

export const resLocalsStorage = (req:Request, res:Response, next:NextFunction) =>{
    res.locals.isLogin = req.session.isLogin
    next()
}