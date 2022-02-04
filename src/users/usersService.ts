import { User } from "./users";

export type UserCreationParams = Pick<User, "email" | "name" | "phoneNumbers">;

export class UserService {
    public get(id: number, name?: string): User {
        return {
            id: id,
            email: "",
            name: name ?? "",
            status: "",
            phoneNumbers: [],
        };
    }

    public create(userCreationParams: UserCreationParams): User {
        return {
            id: Math.floor(Math.random() * 10000),
            status: "",
            ...userCreationParams,
        };
    }
}
