import { UserData } from "../../entities/user/user-data";

export interface UserRepository {
    findAllUsers: () => Promise<UserData[]>
    findUserByName: (name: string) => Promise<UserData>
    add: (user: UserData) => Promise<void>
    exists: (email: string) => Promise<Boolean>
    
}