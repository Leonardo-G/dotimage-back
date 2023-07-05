import * as bcrypt from 'bcrypt';

export class PasswordBcrypt {
  hashPassword(password: string): string {
    return bcrypt.hashSync(password, 10);
  }

  comparePassword(password: string, passwordHash: string): boolean {
    return bcrypt.compareSync(password, passwordHash);
  }
}
