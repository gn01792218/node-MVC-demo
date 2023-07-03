//引入modles和repositpry
import { ProjectRepository } from "../repositories/projectRepository"
import { Request, Response } from 'express'

//初始化
const projectRepository = new ProjectRepository()

export const getProjectHomePage = (req:Request, res:Response)=>{
    res.render('admin/ProjectHome',{pageTitle:"ProjectHome",projects:projectRepository.getAll(),layout:'layouts/adminLayout'})
}