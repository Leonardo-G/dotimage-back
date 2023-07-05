import { PickType } from '@nestjs/mapped-types';
import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UserCreateDTO {
  @IsNotEmpty()
  @MinLength(3, {
    message: 'Name is too short',
  })
  name: string;

  @IsOptional()
  @MinLength(3, {
    message: 'Lastname is too short',
  })
  lastname: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6, {
    message: 'Password is too short',
  })
  password: string;

  @IsOptional()
  imageUrl: string;
}

export class UserLogin extends PickType(UserCreateDTO, [
  'email',
  'password',
] as const) {}
