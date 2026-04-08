"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const userExpenseBalanceSheet_1 = require("../userExpenseBalanceSheet");
class User {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
        this.userExpenseBalanceSheet = new userExpenseBalanceSheet_1.UserExpenseBalanceSheet(this.name, new Map(), 0, 0, 0);
    }
    getName() {
        return this.name;
    }
    getPhone() {
        return this.phone;
    }
    getUserExpenseBalanceSheet() {
        return this.userExpenseBalanceSheet;
    }
    setUserExpenseBalanceSheet(userExpenseBalanceSheet) {
        this.userExpenseBalanceSheet = userExpenseBalanceSheet;
    }
    addBalance(user, balance) {
        this.userExpenseBalanceSheet.addBalance(user, balance);
    }
    removeBalance(user) {
        this.userExpenseBalanceSheet.removeBalance(user);
    }
    getBalance(user) {
        return this.userExpenseBalanceSheet.getBalance(user);
    }
    getTotalExpense() {
        return this.userExpenseBalanceSheet.getTotalExpense();
    }
    getTotalAmountGet() {
        return this.userExpenseBalanceSheet.getTotalAmountGet();
    }
    getTotalAmountOwed() {
        return this.userExpenseBalanceSheet.getTotalAmountOwed();
    }
    getUserVsBalanceSheet() {
        return this.userExpenseBalanceSheet.getUserVsBalanceSheet();
    }
}
exports.User = User;
