import { Project, ProjectEditReqquest } from '../models/project.js'
import { IProjectRepository } from './IprojectRepository.js'
import { projectList } from '../localData/projectList.js'
export class ProjectRepository implements IProjectRepository{
    projects:Partial<Project>[]
    constructor(){
        this.projects = projectList
    }
    getAll(){
        return this.projects
    }
    getById(id:string){
        return this.projects.find(p => p.id === id)
    }

    add(project:Partial<Project>){
        this.projects.push(project)
        return {
            project,
            projects:this.getAll()
        }
    }
    edit(editProject:ProjectEditReqquest){
        const project = this.getById(editProject.id)
        if(project){
            project.title = editProject.title
            project.demoUrl = editProject.demoUrl
            project.imgs = editProject.imgs
            project.tags = editProject.tags
            project.repoUrl = editProject.repoUrl
            project.projectFeatureDescription = editProject.projectFeatureDescription
            project.projectTechnologyDescription = editProject.projectTechnologyDescription
            project.projectFutureDescription = editProject.projectFutureDescription
        }
        return {
            project,
            projects:this.getAll()
        }
    }
    delete(id:string){
        const project = this.getById(id)
        this.projects = this.projects.filter(p => p.id!==id)
        return {
            project,
            projects:this.getAll()
        }
    }
}
