import { User } from '../types/user.js'
import { Project, ProjectCRUDResponse, ProjectCreateRequest, ProjectEditRequest } from '../types/project.js'
export interface IProjectRepository{
    getAll:()=> Promise<Project[]>
    getById:(id:string) => Promise<Project | null>
    add:(project:ProjectCreateRequest, adminUser:User) => Promise<ProjectCRUDResponse>
    edit:(editProject:ProjectEditRequest) => Promise<ProjectCRUDResponse>
    delete:(id:string) => Promise<ProjectCRUDResponse>
}