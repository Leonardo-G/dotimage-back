"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./controller/users.controller");
const users_service_1 = require("./service/users.service");
const user_model_1 = require("./model/user.model");
const hashPassword_1 = require("./utils/hashPassword");
const compare_token_middleware_1 = require("../common/middleware/compare-token/compare-token.middleware");
const favorites_controller_1 = require("../favorites/controller/favorites.controller");
const saved_controller_1 = require("../saved/controller/saved.controller");
const mongoose_1 = require("@nestjs/mongoose");
let UsersModule = class UsersModule {
    configure(consumer) {
        consumer
            .apply(compare_token_middleware_1.CompareTokenMiddleware)
            .forRoutes({ path: 'users/validate-token', method: common_1.RequestMethod.POST }, favorites_controller_1.FavoritesController, saved_controller_1.SavedController);
    }
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: user_model_1.User.name,
                    schema: user_model_1.UserSchema,
                },
            ]),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, hashPassword_1.PasswordBcrypt],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map