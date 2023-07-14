//引入modles和repositpry
import { User } from '../types/user.js'
import { UserRepository } from "../repositories/userReposiitory.js"
import { Request, Response } from 'express'
import crypto from 'crypto'

//初始化
const userRepository = new UserRepository()

export const getUserHomePage = (req:Request, res:Response)=>{
    res.render('admin/UserHome',{pageTitle:"UserHome",users:userRepository.getAll(),layout:'layouts/adminLayout'})
}
export const getAddUserPage = (req:Request, res:Response) => {
    res.render('admin/AddUser',{pageTitle:"AddUser",layout:'layouts/adminLayout'})
}
export const postAddUser = (req:Request, res:Response)=>{
    const { name, account, passward, email }:User = req.body
    const user:User = {
        id:crypto.randomUUID(),
        name,
        account,
        passward,
        email
    }
    userRepository.add(user)
    res.redirect('/admin/user')
}