import { UUID } from "crypto"

export interface User{
    id:UUID
    name:string
    account:string
    password:string
    email:string
    isLogin?:boolean
}

export interface UserLoginRequest{
    account:string,
    password:string
}