"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    get(id, name) {
        return {
            id: id,
            email: "",
            name: name !== null && name !== void 0 ? name : "",
            status: "",
            phoneNumbers: [],
        };
    }
    create(userCreationParams) {
        return Object.assign({ id: Math.floor(Math.random() * 10000), status: "" }, userCreationParams);
    }
}
exports.UserService = UserService;
