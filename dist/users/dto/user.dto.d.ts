export declare class UserCreateDTO {
    name: string;
    lastname: string;
    email: string;
    password: string;
    imageUrl: string;
}
declare const UserLogin_base: import("@nestjs/mapped-types").MappedType<Pick<UserCreateDTO, "email" | "password">>;
export declare class UserLogin extends UserLogin_base {
}
export {};
