import { UserModelResponse } from '@/lib/core/models/user_response_model';
import { UserSingleton } from './../../../../core/service/userSingleton';
import axios from 'axios'
import * as E from 'fp-ts/Either'

export class LoginServer {

    async login(email:string, password:string):Promise<E.Either<string, UserModelResponse>>{
        //
        try {
            const resp= axios.post<UserModelResponse>(`${process.env.SERVER}/login`,{
                email,
                password
            }        
            )
            const datos=(await resp).data;

            const userSingleton=UserSingleton.getInstance();

            userSingleton.setUserResponse(datos);

            const valor=userSingleton.getUserResponse();
            console.log(valor?.data?.token);

            return E.right(datos)
        } catch (error) {
            return E.left('error desconocido')
        }
  }
}
