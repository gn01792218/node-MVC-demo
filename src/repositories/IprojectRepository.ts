import { Project, ProjectCRUDResponse, ProjectEditReqquest } from '../models/project.js'
export interface IProjectRepository{
    projects:Partial<Project>[],
    getAll:()=> Partial<Project>[]
    getById:(id:string) => Partial<Project> | undefined
    add:(project:Partial<Project>) => ProjectCRUDResponse
    edit:(editProject:ProjectEditReqquest) => ProjectCRUDResponse
    delete:(id:string) => ProjectCRUDResponse
}