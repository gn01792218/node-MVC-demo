//引入modles和repositpry
import { AddUserRequest } from '../types/user.js'
import { UserRepository } from "../repositories/userReposiitory.js"
import { NextFunction, Request, Response } from 'express'
import { customErrorObject } from "../utils/errorUtils.js"

//初始化
const userRepository = new UserRepository()

export const getUserHomePage = async(req:Request, res:Response, next:NextFunction)=>{
    const users = await userRepository.getAll()
    .catch((err)=>next(customErrorObject(err)))

    res.render('admin/UserHome',{pageTitle:"UserHome",users:users,layout:'layouts/adminLayout'})
}
export const getAddUserPage = (req:Request, res:Response) => {
    res.render('admin/AddUser',{pageTitle:"AddUser",layout:'layouts/adminLayout'})
}
export const postAddUser = async (req:Request, res:Response, next:NextFunction)=>{
    await userRepository.add(req.body as AddUserRequest)
    .catch((err)=>next(customErrorObject(err)))

    res.redirect('/admin/user')
}