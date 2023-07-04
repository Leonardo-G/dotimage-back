import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UserCreateDTO } from '../dto/user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async newUser(@Body() userCreateDTO: UserCreateDTO) {
    try {
      const user = await this.usersService.createUser(userCreateDTO);
      return user;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
