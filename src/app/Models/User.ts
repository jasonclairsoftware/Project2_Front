

export class User{
    u_id:number;
    username:string;
    password:string;
    is_Manager:boolean;

    constructor(u_id:number, username:string, password:string, is_Manager:boolean){
        this.u_id = u_id;
        this.username = username;
        this.password = password;
        this.is_Manager = is_Manager;
    }
}