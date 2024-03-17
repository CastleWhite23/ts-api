import { IGetUsersController, IGetUsersRepository } from "./protocols"

export class GetUsersController implements IGetUsersController {
    getUsersRepository
    constructor(getUsersRepository: IGetUsersRepository) {
        this.getUsersRepository = getUsersRepository
    }

    async handle() {
        try{
            const users = await this.getUsersRepository.getUsers()
            
            return {
                statusCode: 200,
                body: users
            }
        }catch(error){
            return {
                statusCode: 400,
                body: "Não tem nenhum usuario"
            }
        }
    }
}

// controller -> model -> repositories -> banco