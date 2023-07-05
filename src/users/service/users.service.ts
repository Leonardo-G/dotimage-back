import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';

import { User } from '../model/user.model';
import { UserCreateDTO } from '../dto/user.dto';
import { PasswordBcrypt } from '../utils/hashPassword';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersModel: typeof User,
    private jwtService: JwtService,
    private passwordBcrypt: PasswordBcrypt,
  ) {}

  async createUser({ name, lastname = '', email, password }: UserCreateDTO) {
    const isExistUser = await this.usersModel.findOne({
      where: { email },
    });

    if (isExistUser) {
      throw new BadRequestException(`The email ${email} is already exists`);
    }

    const user = new this.usersModel({
      name,
      lastname,
      email,
      password: this.passwordBcrypt.hashPassword(password),
    });
    await user.save();

    return {
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      token: await this.jwtService.signAsync({
        id: user.id,
        name: user.name,
      }),
    };
  }

  async validateToken(id: string) {
    const user = await User.findOne({
      where: { id },
    });

    if (!user) throw new BadRequestException('User does not exists');

    const token = await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
    });

    return {
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      token,
    };
  }

  async loginUser(email: string, password: string) {
    const user = await this.usersModel.findOne({
      where: { email },
    });
    console.log(user);
    if (!user) throw new BadRequestException('User does not exists');

    const isCorrectPassword = this.passwordBcrypt.comparePassword(
      password,
      user.password,
    );

    if (!isCorrectPassword)
      throw new BadRequestException('email/password incorrect');

    const token = await this.jwtService.signAsync({
      id: user.id,
      name: user.name,
    });

    return {
      name: user.name,
      email: user.email,
      imageUrl: user.imageUrl,
      token,
    };
  }
}
