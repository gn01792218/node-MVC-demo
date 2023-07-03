import { Project, ProjectEditReqquest } from '../models/project'
import { IProjectRepository } from './IprojectRepository'
import { projectList } from '../localData/projectList'
export class ProjectRepository implements IProjectRepository{
    projects:Project[]
    constructor(){
        this.projects = projectList
    }
    getAll(){
        return this.projects
    }
    getById(id:string){
        return this.projects.find(p => p.id === id)
    }

    add(project:Project){
        this.projects.push(project)
        return {
            project,
            projects:this.getAll()
        }
    }
    edit(id:string, editProject:ProjectEditReqquest){
        const project = this.getById(id)
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
