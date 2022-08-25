export interface UserData{
    id: number;
    email: string;
    password:string;
    userName:string;
    isAdmin:boolean;
    
}
export interface UserRO {
    user: UserData;
  }