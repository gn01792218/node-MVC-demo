import { UUID } from "crypto"

import { Model, InferAttributes, InferCreationAttributes} from "sequelize";
export interface User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  id :UUID
  name:string
  account:string
  password:string
  email:string
  isLogin:boolean
}
export interface AddUserRequest {
  name:string
  account:string
  password:string
  email:string
}
export interface UserLoginRequest{
    account:string,
    password:string
}