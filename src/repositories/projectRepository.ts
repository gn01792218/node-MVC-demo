import { randomUUID } from 'crypto'
import { ProjectCreateRequest, ProjectEditRequest } from '../types/project.js'
import { IProjectRepository } from './IprojectRepository.js'
import UserModel from '../data/Models/user.js'
import ProjectModal from '../data/Models/project.js'
export class ProjectRepository implements IProjectRepository{
    async getAll(){
        return await ProjectModal.findAll()
    }
    async getById(id:string){
        return await ProjectModal.findByPk(id)
    }
    async add(project:ProjectCreateRequest){
        const createProject =await ProjectModal.create({
            id:randomUUID(),
            title:project.title,
            demoUrl:project.demoUrl,
            imgs:project.imgs,
            tags:project.tags,
            repoUrl:project.repoUrl,
            featureDescription:project.featureDescription,
            technologyDescription:project.technologyDescription,
            futureDescription:project.futureDescription,
        })
        return {
            project:createProject,
            projects:await this.getAll()
        }
    }
    async edit(editProject:ProjectEditRequest){
        const project =await this.getById(editProject.id)
        if(project){
            project.title = editProject.title
            project.demoUrl = editProject.demoUrl
            project.imgs = editProject.imgs
            project.tags = editProject.tags
            project.repoUrl = editProject.repoUrl
            project.featureDescription = editProject.featureDescription
            project.technologyDescription = editProject.technologyDescription
            project.futureDescription = editProject.futureDescription
            await project.save()
        }
        return {
            project,
            projects:await this.getAll()
        }
    }
    async delete(id:string){
        const project =await this.getById(id)
        if(project){
            await project.destroy()
        }
        return {
            project,
            projects:await this.getAll()
        }
    }
}
