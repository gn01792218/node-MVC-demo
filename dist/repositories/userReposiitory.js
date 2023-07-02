"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.users = [];
    }
    add(user) {
        this.users.push(user);
    }
    getAll() {
        return this.users;
    }
}
exports.UserRepository = UserRepository;
