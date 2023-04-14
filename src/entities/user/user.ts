import { Email } from "./email";
import { Name } from "./name";

export class User{
    public readonly name: Name;
    public readonly email: Email;
    public readonly password: string;

    private constructor (name: Name, email: Email, password: string ){
        this.name = name
        this.email = email
        this.password = password
        Object.freeze(this)
    };


    
    


}