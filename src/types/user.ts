import { UUID } from "crypto"

export interface User{
    id:UUID
    name:string
    account:string
    passward:string
    email:string
}