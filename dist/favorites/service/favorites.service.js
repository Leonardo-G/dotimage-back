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
exports.FavoritesService = void 0;
const common_1 = require("@nestjs/common");
const favorites_model_1 = require("../model/favorites.model");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let FavoritesService = class FavoritesService {
    constructor(favoritesModel) {
        this.favoritesModel = favoritesModel;
    }
    async newFavorite(favoriteCreateDTO, user_id) {
        const favorite = new this.favoritesModel(Object.assign({ user_id }, favoriteCreateDTO));
        await favorite.save();
        return favorite;
    }
    async getAllById(id) {
        const favorites = await this.favoritesModel.find({
            user_id: id,
        });
        return favorites;
    }
    async deleteById(id) {
        await this.favoritesModel.findByIdAndDelete(id);
        return { msg: 'ELIMINADO' };
    }
};
FavoritesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(favorites_model_1.Favorites.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FavoritesService);
exports.FavoritesService = FavoritesService;
//# sourceMappingURL=favorites.service.js.map