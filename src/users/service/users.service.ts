import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { JwtService } from '@nestjs/jwt';

import { User } from '../model/user.model';
import { UserCreateDTO } from '../dto/user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private usersModel: typeof User,
    private jwtService: JwtService,
  ) {}

  async createUser({ name, lastname = '', email, password }: UserCreateDTO) {
    const isExistUser = await this.usersModel.findOne({
      where: { email },
    });

    if (isExistUser) {
      throw new BadRequestException(`The email ${email} is already exists`);
    }

    const user = new this.usersModel({ name, lastname, email, password });
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
}
