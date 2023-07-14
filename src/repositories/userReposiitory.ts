import { User } from "../types/user.js";
import { IUserRepository } from "./IuserRepository.js";
import Users from "../data/Models/user.js";
import { Optional, WhereOptions } from "sequelize";
import { UUID } from "crypto";
export class UserRepository implements IUserRepository {
  add(user: Optional<User, "id">) {
    Users.create(user);
  }
  async getAll() {
    return await Users.findAll();
  }
  async getByWhere(where: WhereOptions<User>) {
    return await Users.findOne({
      where: where,
    });
  }
  async getById(id: UUID) {
    return await Users.findByPk(id);
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
