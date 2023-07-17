import { User, AddUserRequest } from "../types/user.js";
export interface IUserRepository {
  add: (user: AddUserRequest) => void;
  getAll: () => Promise<User[]>;
}
