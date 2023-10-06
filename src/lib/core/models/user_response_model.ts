export interface UserModelResponse {
    status?:  string;
    message?: string;
    data?:    Data;
}

export interface Data {
    user?:  User;
    token?: string;
}

export interface User {
    id?:       string;
    username?: string;
    email?:    string;
}
