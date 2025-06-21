export interface JwtPayload{
    id:number;
    email:string;
}

export interface UserCredentials {
    email: string;  
    password: string; 
}

export interface UserRegistrationData{
    email:string;
    password:string;
}
export interface JwtVerifyPayload{
    token:string,
    jwtSecret:string
}