//引入modles和repositpry
import { User } from '../types/user.js'
import { UserRepository } from "../repositories/userReposiitory.js"
import { Request, Response } from 'express'
import crypto from 'crypto'
import { isLogin } from './adminController.js'

//初始化
const userRepository = new UserRepository()

export const getUserHomePage = async(req:Request, res:Response)=>{
    const users = await userRepository.getAll()
    res.render('admin/UserHome',{isLogin,pageTitle:"UserHome",users:users,layout:'layouts/adminLayout'})
}
export const getAddUserPage = (req:Request, res:Response) => {
    res.render('admin/AddUser',{isLogin,pageTitle:"AddUser",layout:'layouts/adminLayout'})
}
export const postAddUser = (req:Request, res:Response)=>{
    const { name, account, password, email }:User = req.body
    const user:User = {
        id:crypto.randomUUID(),
        name,
        account,
        password,
        email
    }
    userRepository.add(user)
    res.redirect('/admin/user')
}