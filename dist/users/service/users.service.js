"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const hashPassword_1 = require("../utils/hashPassword");
const mongoose_1 = require("mongoose");
const user_model_1 = require("../model/user.model");
const mongoose_2 = require("@nestjs/mongoose");
let UsersService = class UsersService {
    constructor(usersDocument, jwtService, passwordBcrypt) {
        this.usersDocument = usersDocument;
        this.jwtService = jwtService;
        this.passwordBcrypt = passwordBcrypt;
    }
    async createUser({ name, lastname = '', email, password }) {
        const isExistUser = await this.usersDocument.findOne({ email });
        if (isExistUser) {
            throw new common_1.BadRequestException(`The email ${email} is already exists`);
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
    async validateToken(id) {
        const user = await this.usersDocument.findById(id);
        if (!user)
            throw new common_1.BadRequestException('User does not exists');
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
    async loginUser(email, password) {
        const user = await this.usersDocument.findOne({ email });
        if (!user)
            throw new common_1.BadRequestException('User does not exists');
        const isCorrectPassword = this.passwordBcrypt.comparePassword(password, user.password);
        if (!isCorrectPassword)
            throw new common_1.BadRequestException('email/password incorrect');
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
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(user_model_1.User.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService,
        hashPassword_1.PasswordBcrypt])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map