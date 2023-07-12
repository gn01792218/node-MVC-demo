import { User } from '../models/user.js'
export interface IUserRepository{
    users:User[],
    add:(user:User) => void
    getAll:()=> User[]
}