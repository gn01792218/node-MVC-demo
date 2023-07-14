import { User,AddUserRequest } from "../types/user.js";
import UserModel from '../data/Models/user.js'
import { IUserRepository } from "./IuserRepository.js";
import { Optional, WhereOptions } from "sequelize";
import {  randomUUID, UUID } from "crypto";
export class UserRepository implements IUserRepository {
  add(addUser:AddUserRequest ) {
    UserModel.create({
        id:randomUUID(),
        name:addUser.name,
        account:addUser.account,
        password:addUser.password,
        email:addUser.email,
        isLogin:false
    }) 
  }
  async getAll() {
    return await UserModel.findAll();
  }
  async getByWhere(where: WhereOptions<User>) {
    return await UserModel.findOne({
      where,
    });
  }
  async getById(id: UUID) {
    return await UserModel.findByPk(id);
  }
  async update(updateuser: Optional<User, "id">) {
    const user = await this.getById(updateuser.id as UUID);
    if (user) {
      (user.name = updateuser.name),
        (user.account = updateuser.account),
        (user.password = updateuser.password),
        (user.email = updateuser.email),
        (user.isLogin = updateuser.isLogin);
      await user.save();
    }
    return user;
  }
  async updateLoginStatus(updateuser: Optional<User, "id">) {
    const user = await this.getById(updateuser.id as UUID);
    if (user) {
      user.isLogin = updateuser.isLogin;
      await user.save();
    }
    return user;
  }
}
