import { UserData } from "../../entities/user/user-data";

export interface RegisterUserInterface {
    registerUser: (user: UserData) => Promise<UserData>
}