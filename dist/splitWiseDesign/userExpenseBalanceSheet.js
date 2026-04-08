"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserExpenseBalanceSheet = void 0;
const balance_1 = require("./balance");
class UserExpenseBalanceSheet {
    constructor(userId, userVsBalanceSheet, totalExpense, totalAmountGet, totalAmountOwed) {
        this.userId = userId;
        this.userVsBalanceSheet = userVsBalanceSheet;
        this.totalExpense = totalExpense;
        this.totalAmountGet = totalAmountGet;
        this.totalAmountOwed = totalAmountOwed;
    }
    getUserVsBalanceSheet() {
        return this.userVsBalanceSheet;
    }
    getTotalExpense() {
        return this.totalExpense;
    }
    getTotalAmountGet() {
        return this.totalAmountGet;
    }
    getTotalAmountOwed() {
        return this.totalAmountOwed;
    }
    addBalance(user, balance) {
        this.userVsBalanceSheet.set(user, balance);
    }
    addOrUpdateBalance(user, amountGetDelta, amountOwedDelta) {
        const balance = this.getBalance(user);
        balance.increaseAmountGet(amountGetDelta);
        balance.increaseAmountOwed(amountOwedDelta);
        this.userVsBalanceSheet.set(user, balance);
    }
    removeBalance(user) {
        this.userVsBalanceSheet.delete(user);
    }
    getBalance(user) {
        return this.userVsBalanceSheet.get(user) ?? new balance_1.Balance(0, 0);
    }
    addToTotalExpense(amount) {
        this.totalExpense += amount;
    }
    addToTotalAmountGet(amount) {
        this.totalAmountGet += amount;
    }
    addToTotalAmountOwed(amount) {
        this.totalAmountOwed += amount;
    }
}
exports.UserExpenseBalanceSheet = UserExpenseBalanceSheet;
