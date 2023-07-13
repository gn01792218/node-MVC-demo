import { User } from "../types/user.js";
import { IUserRepository } from "./IuserRepository.js";

export class UserRepository implements IUserRepository{
    users:User[]
    constructor(){
        this.users = []
    }
    add(user: User){
        this.users.push(user)
    }
    getAll(){
        return this.users
    }
}