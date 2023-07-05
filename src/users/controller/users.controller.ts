import { Body, Controller, HttpException, Post, Req } from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { UserCreateDTO, UserLogin } from '../dto/user.dto';
import { Request } from 'express';

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

  @Post('validate-token')
  validate(@Req() req: Request & { id: string }) {
    try {
      console.log(req.id);
      return this.usersService.validateToken(req.id);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Post('login')
  login(@Body() userLogin: UserLogin) {
    try {
      return this.usersService.loginUser(userLogin.email, userLogin.password);
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
