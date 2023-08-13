import { Errback, Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateErrorHandle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //統一處理驗證錯誤的處理邏輯
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422);
    return console.log(errors.array());
  }
  next();
}

export const errorHandle = (error:Errback, req:Request, res:Response, next:NextFunction) => {  //四個參數缺一不可，否則捕獲的錯誤不會到這裡來
  //統一處理錯誤捕獲
  res.status(500).render('500',{
    pageTitle:'內部錯誤',
    error
  })
}
