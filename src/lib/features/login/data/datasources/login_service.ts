import { UserModelResponse } from '@/lib/core/models/user_response_model';
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
            console.log((await resp).data);
    
            return E.right((await resp).data)
        } catch (error) {
            return E.left('error desconocido')
        }
        
        // ...
  }
    
    
}
