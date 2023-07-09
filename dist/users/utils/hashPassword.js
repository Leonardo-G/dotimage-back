"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordBcrypt = void 0;
const bcrypt = require("bcrypt");
class PasswordBcrypt {
    hashPassword(password) {
        return bcrypt.hashSync(password, 10);
    }
    comparePassword(password, passwordHash) {
        return bcrypt.compareSync(password, passwordHash);
    }
}
exports.PasswordBcrypt = PasswordBcrypt;
//# sourceMappingURL=hashPassword.js.map