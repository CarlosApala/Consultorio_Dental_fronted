
import {Either} from 'fp-ts/Either'
import {UserModelResponse} from '../../../../core/models/user_response_model'
export abstract class LoginRepository {
     abstract login(email:string,password:string) :Promise< Either<string,UserModelResponse>>;
}

