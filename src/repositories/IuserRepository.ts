import { User, AddUserRequest } from "../types/user.js";
export interface IUserRepository {
  add: (user: AddUserRequest) => Promise<User>;
  getAll: () => Promise<User[]>;
}
