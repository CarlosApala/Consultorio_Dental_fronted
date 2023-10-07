
import {UserModelResponse} from './../models/user_response_model'

export class UserSingleton {
    private static instance: UserSingleton | null = null;
    private userResponse: UserModelResponse | null = null;
  
    private constructor() {
        //
    }
  
    static getInstance(): UserSingleton {
      if (!UserSingleton.instance) {
        UserSingleton.instance = new UserSingleton();
      }
      return UserSingleton.instance;
    }
  
    setUserResponse(response: UserModelResponse): void {
      this.userResponse = response;
    }
  
    getUserResponse(): UserModelResponse | null {
      return this.userResponse;
    }
  }