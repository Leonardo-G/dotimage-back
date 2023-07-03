import { Controller, HttpException, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    @Post()
    newUser() {
        try {
            
        } catch (error) {
            new HttpException(error.message, error.status);
        }
    }
}
