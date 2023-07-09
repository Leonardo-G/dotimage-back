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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoritesSchema = exports.Favorites = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_model_1 = require("../../users/model/user.model");
let Favorites = class Favorites {
};
__decorate([
    (0, mongoose_1.Prop)({
        type: mongoose_2.Types.ObjectId,
        ref: 'User',
    }),
    __metadata("design:type", user_model_1.User)
], Favorites.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "favoriteId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        enum: ['image', 'video', 'gifs', 'sticker'],
        required: true,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        type: String,
        required: true,
    }),
    __metadata("design:type", String)
], Favorites.prototype, "urlImage", void 0);
Favorites = __decorate([
    (0, mongoose_1.Schema)()
], Favorites);
exports.Favorites = Favorites;
exports.FavoritesSchema = mongoose_1.SchemaFactory.createForClass(Favorites);
//# sourceMappingURL=favorites.model.js.map