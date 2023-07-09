import { JwtService } from '@nestjs/jwt';
import { UserCreateDTO } from '../dto/user.dto';
import { PasswordBcrypt } from '../utils/hashPassword';
import { Model } from 'mongoose';
import { User } from '../model/user.model';
export declare class UsersService {
    private usersDocument;
    private jwtService;
    private passwordBcrypt;
    constructor(usersDocument: Model<User>, jwtService: JwtService, passwordBcrypt: PasswordBcrypt);
    createUser({ name, lastname, email, password }: UserCreateDTO): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        token: string;
    }>;
    validateToken(id: string): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        token: string;
    }>;
    loginUser(email: string, password: string): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        token: string;
    }>;
}
