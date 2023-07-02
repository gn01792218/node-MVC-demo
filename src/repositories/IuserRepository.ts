import { User } from '../models/user'
export interface IUserRepository{
    users:User[],
    add:(user:User) => void
    getAll:()=> User[]
}