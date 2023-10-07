import { UserModelResponse } from '@/lib/core/models/user_response_model';
import { LoginRepository } from './../repositories/login_repository'
import { Either } from "fp-ts/Either";
export class LoginUseCase {

    constructor(private lrepo: LoginRepository) {
        //
    }

    async call(email: string, password: string): Promise<Either<string, UserModelResponse>> {
        //
        return this.lrepo.login(email, password);

    }


}