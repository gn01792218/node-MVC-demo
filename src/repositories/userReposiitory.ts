import { User } from "../models/user";
import { IUserRepository } from "./IuserRepository";

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