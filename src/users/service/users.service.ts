import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UserCreateDTO } from '../dto/user.dto';
import { PasswordBcrypt } from '../utils/hashPassword';
import { Model } from 'mongoose';
import { User } from '../model/user.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private usersDocument: Model<User>,
    private jwtService: JwtService,
    private passwordBcrypt: PasswordBcrypt,
  ) {}

  async createUser({ name, lastname = '', email, password }: UserCreateDTO) {
    const isExistUser = await this.usersDocument.findOne({ email });

    if (isExistUser) {
      throw new BadRequestException(`The email ${email} is already exists`);
    }

    const user = new this.usersDocument({
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
        id: user._id,
        name: user.name,
      }),
    };
  }

  async validateToken(id: string) {
    const user = await this.usersDocument.findById(id);

    if (!user) throw new BadRequestException('User does not exists');

    const token = await this.jwtService.signAsync({
      id: user._id,
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
    const user = await this.usersDocument.findOne({ email });
    if (!user) throw new BadRequestException('User does not exists');

    const isCorrectPassword = this.passwordBcrypt.comparePassword(
      password,
      user.password,
    );

    if (!isCorrectPassword)
      throw new BadRequestException('email/password incorrect');

    const token = await this.jwtService.signAsync({
      id: user._id,
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
