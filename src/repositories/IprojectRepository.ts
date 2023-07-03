import { Project, ProjectCRUDResponse, ProjectEditReqquest } from '../models/project'
export interface IProjectRepository{
    projects:Project[],
    getAll:()=> Project[]
    getById:(id:string) => Project | undefined
    add:(project:Project) => ProjectCRUDResponse
    edit:(id:string, editProject:ProjectEditReqquest) => ProjectCRUDResponse
    delete:(id:string) => ProjectCRUDResponse
}