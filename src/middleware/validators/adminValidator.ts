import { ValidateProperty } from "../../types/validate.js";
import { body } from "express-validator";  //我們不需要使用check檢查全部的地方，只需要檢查req.body即可
import { UserRepository } from "../../repositories/userReposiitory.js";
const userRepository = new UserRepository()
const vaildateEmail = body(ValidateProperty.EMAIL)
  .isEmail()
  .withMessage('請輸入正確的email格式')
  .normalizeEmail()  //將email格式化成沒有大寫的型態 ( 較正式的email格式 )
  .trim()
  .custom(async(value,{ req }) => {
    const { email } = req.body
    const sameEmailUser = await userRepository.getByWhere({email})
    if(sameEmailUser) throw new Error('此email已經有人註冊過了!')
    return true
})
const validateAccount = body(ValidateProperty.ACCOUNT)
.isString()
.isLength({max:10})
.withMessage('帳號名稱最長不可超過10個字元')
.trim()
.custom(async(value, {req}) => {
    const { account } = req.body
    const sameAccountUser =await userRepository.getByWhere({account})
    if(sameAccountUser) throw new Error ('此account已經有人註冊過了!')
    return true
})

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
    validateAccount,
    vaildatePassword,
    vaildateConfirmPassword
]
