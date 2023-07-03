//引入modles和repositpry
import { User } from '../models/user'
import { UserRepository } from "../repositories/userReposiitory"
import { Request, Response } from 'express'

//初始化
const userRepository = new UserRepository()

export const getUserHomePage = (req:Request, res:Response)=>{
    res.render('UserHome',{pageTitle:"UserHome",users:userRepository.getAll()})
}
export const getAddUserPage = (req:Request, res:Response) => {
    res.render('AddUser',{pageTitle:"AddUser"})
}
export const postAddUser = (req:Request, res:Response)=>{
    const user:User = {
        name:req.body.username
    }
    userRepository.add(user)
    res.redirect('/admin/user')
}