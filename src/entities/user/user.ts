import { Email } from "./email";
import { Name } from "./name";
import { UserData } from "./user-data"

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


    static create (userData: UserData): User{
        const name: any = Name.create(userData.name)
        const email: Email = Email.create(userData.email)
        const password: string = 'teste' 
        return new User(name, email, password)
    }



}