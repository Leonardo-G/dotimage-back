import { UsersService } from '../service/users.service';
import { UserCreateDTO, UserLogin } from '../dto/user.dto';
import { Request } from 'express';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    newUser(userCreateDTO: UserCreateDTO): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        token: string;
    }>;
    validate(req: Request & {
        id: string;
    }): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        token: string;
    }>;
    login(userLogin: UserLogin): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        token: string;
    }>;
}
