import { User } from '../types/user.js'
export interface IUserRepository{
    users:User[],
    add:(user:User) => void
    getAll:()=> User[]
}