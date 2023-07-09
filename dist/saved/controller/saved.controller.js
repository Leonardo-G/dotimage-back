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
exports.SavedController = void 0;
const common_1 = require("@nestjs/common");
const saved_dto_1 = require("../dto/saved.dto");
const saved_service_1 = require("../service/saved.service");
const validate_mongo_id_pipe_1 = require("../../common/pipe/validate-mongo-id.pipe");
let SavedController = class SavedController {
    constructor(savedService) {
        this.savedService = savedService;
    }
    newSaved(savedCreateDTO, req) {
        try {
            return this.savedService.createSaved(savedCreateDTO, req.id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    getSaved(req) {
        try {
            return this.savedService.getSavedForUser(req.id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
    deleteSaved(id) {
        try {
            return this.savedService.deleteById(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.status);
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [saved_dto_1.SavedCreateDTO, Object]),
    __metadata("design:returntype", void 0)
], SavedController.prototype, "newSaved", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SavedController.prototype, "getSaved", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', validate_mongo_id_pipe_1.ValidateMongoIdPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SavedController.prototype, "deleteSaved", null);
SavedController = __decorate([
    (0, common_1.Controller)('saved'),
    __metadata("design:paramtypes", [saved_service_1.SavedService])
], SavedController);
exports.SavedController = SavedController;
//# sourceMappingURL=saved.controller.js.map