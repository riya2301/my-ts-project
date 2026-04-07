"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, accountNumber, balance, card) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.card = card;
    }
    getName() {
        return this.name;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    getCard() {
        return this.card;
    }
    setBalance(balance) {
        this.balance = balance;
    }
    setCard(card) {
        this.card = card;
    }
    setAccountNumber(accountNumber) {
        this.accountNumber = accountNumber;
    }
    setName(name) {
        this.name = name;
    }
}
exports.User = User;
