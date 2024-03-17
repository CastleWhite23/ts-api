import { IGetUsersController, IGetUsersRepository } from "./protocols"

export class GetUsersController implements IGetUsersController {
    getUsersRepository
    constructor(getUsersRepository: IGetUsersRepository){
        this.getUsersRepository= getUsersRepository
    }

    handle() {
        
    }
}

// controller -> model -> repositories -> banco