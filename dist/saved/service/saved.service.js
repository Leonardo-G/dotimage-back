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
exports.SavedService = void 0;
const common_1 = require("@nestjs/common");
const saved_model_1 = require("../model/saved.model");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SavedService = class SavedService {
    constructor(savedModel) {
        this.savedModel = savedModel;
    }
    async createSaved(savedCreateDTO, id) {
        const saved = new this.savedModel(Object.assign(Object.assign({}, savedCreateDTO), { user_id: id }));
        await saved.save();
        return saved;
    }
    async getSavedForUser(id) {
        const saved = await this.savedModel.find({ user_id: id });
        return saved;
    }
    async deleteById(id) {
        await this.savedModel.findByIdAndDelete(id);
        return { msg: 'ELIMINADO' };
    }
};
SavedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(saved_model_1.Saved.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SavedService);
exports.SavedService = SavedService;
//# sourceMappingURL=saved.service.js.map