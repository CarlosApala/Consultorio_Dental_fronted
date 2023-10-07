import { Either } from "fp-ts/Either";
import {UserModelResponse} from "./../../../../core/models/user_response_model"
import { LoginRepository } from "../../domain/repositories/login_repository";
import {LoginServer} from '../datasources/login_service'


export class LoginImplement extends LoginRepository {
    login(email: string, password: string): Promise<Either<string, UserModelResponse>> {
        return this.log.login(email,password);
    }
        
    constructor(private log:LoginServer) {
        super();

    }

}