"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const database_module_1 = require("./database/database.module");
const jwt_1 = require("@nestjs/jwt");
const constants_1 = require("./common/constants/constants");
const compare_token_middleware_1 = require("./common/middleware/compare-token/compare-token.middleware");
const saved_module_1 = require("./saved/saved.module");
const saved_controller_1 = require("./saved/controller/saved.controller");
const favorites_module_1 = require("./favorites/favorites.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer.apply(compare_token_middleware_1.CompareTokenMiddleware).forRoutes(saved_controller_1.SavedController);
    }
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            users_module_1.UsersModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: constants_1.jwtConstants.PALABRA_SECRET,
                signOptions: {
                    expiresIn: '7d',
                },
            }),
            saved_module_1.SavedModule,
            favorites_module_1.FavoritesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map