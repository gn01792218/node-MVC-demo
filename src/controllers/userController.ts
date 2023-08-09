//引入modles和repositpry
import { AddUserRequest } from '../types/user.js'
import { UserRepository } from "../repositories/userReposiitory.js"
import { Request, Response } from 'express'

//初始化
const userRepository = new UserRepository()

export const getUserHomePage = async(req:Request, res:Response)=>{
    const users = await userRepository.getAll()
    res.render('admin/UserHome',{pageTitle:"UserHome",users:users,layout:'layouts/adminLayout'})
}
export const getAddUserPage = (req:Request, res:Response) => {
    res.render('admin/AddUser',{pageTitle:"AddUser",layout:'layouts/adminLayout'})
}
export const postAddUser = (req:Request, res:Response)=>{
    userRepository.add(req.body as AddUserRequest)
    res.redirect('/admin/user')
}