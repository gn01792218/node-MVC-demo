import { ValidateProperty } from "../../types/validate.js";
import { body } from "express-validator";  //我們不需要使用check檢查全部的地方，只需要檢查req.body即可
const vaildateEmail = body(ValidateProperty.EMAIL)
  .isEmail()
  .withMessage('請輸入正確的email格式')
  .normalizeEmail()  //將email格式化成沒有大寫的型態 ( 較正式的email格式 )
  .trim()

const vaildatePassword = body(ValidateProperty.PASSWORD)
  .isString()
  .isLength({min:12})  //長度至少12
  .withMessage('請輸入正確的密碼格式( 至少12個字元 )')
  .trim() //格式化，去頭尾空格

const vaildateConfirmPassword = body(ValidateProperty.CONFIRMPASSWORD)
  .custom((value,{req})=>{
    if( value !== req.body.password ) throw new Error('密碼不一致!請重新輸入')
    return true
  })
  .trim()

export const signUpValidate = [
    vaildateEmail,
    vaildatePassword,
    vaildateConfirmPassword
]
