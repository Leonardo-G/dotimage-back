import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Types } from 'mongoose';
import { IPayload } from 'src/users/interface/token.interface';

@Injectable()
export class CompareTokenMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: any, res: any, next: () => void) {
    const token = req.headers['token-auth'];

    if (!token) throw new UnauthorizedException('Token is required');

    const tokenDecoded = this.jwtService.verify<IPayload>(token);

    if (!Types.ObjectId.isValid(tokenDecoded.id))
      throw new UnauthorizedException('Invalid Objet ID');

    req.id = tokenDecoded.id;

    next();
  }
}
