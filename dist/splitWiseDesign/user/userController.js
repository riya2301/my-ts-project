"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(userList) {
        this.userList = userList;
    }
    addUser(user) {
        this.userList.push(user);
    }
    getUserList() {
        return this.userList;
    }
    getUserExpenseBalanceSheet(user) {
        return user.userExpenseBalanceSheet;
    }
}
exports.UserController = UserController;
