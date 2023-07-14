import { User } from "../types/user.js";
import { IUserRepository } from "./IuserRepository.js";
import Users from '../data/Models/user.js'
import { Optional } from "sequelize";
export class UserRepository implements IUserRepository{
    add(user: Optional<User,"id">){
        Users.create(user)
    }
    getAll(){
        return Users.findAll()
    }
}