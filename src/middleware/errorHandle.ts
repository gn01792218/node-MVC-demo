import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
export const validateErrorHandle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(422);
    return console.log(errors.array());
  }
  next();
};
