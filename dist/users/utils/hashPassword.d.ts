export declare class PasswordBcrypt {
    hashPassword(password: string): string;
    comparePassword(password: string, passwordHash: string): boolean;
}
