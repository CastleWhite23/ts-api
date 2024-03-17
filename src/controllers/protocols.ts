import { User } from "../models/User"

export interface IGetUsersController{
    handle(): any
}

export interface IGetUsersRepository{
    getUsers(): Promise<User[]>
}