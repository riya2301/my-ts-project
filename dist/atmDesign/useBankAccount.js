"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseBankAccount = void 0;
class UseBankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance = balance;
    }
}
exports.UseBankAccount = UseBankAccount;
