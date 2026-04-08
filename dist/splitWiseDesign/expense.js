"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Split = exports.SplitType = exports.Expense = void 0;
class Expense {
    constructor(amount, paidBy, splitList, splitType) {
        this.amount = amount;
        this.paidBy = paidBy;
        this.splitList = splitList;
        this.splitType = splitType;
    }
    getAmount() {
        return this.amount;
    }
    getPaidBy() {
        return this.paidBy;
    }
    getSplitList() {
        return this.splitList;
    }
    getSplitType() {
        return this.splitType;
    }
}
exports.Expense = Expense;
var SplitType;
(function (SplitType) {
    SplitType["EQUAL"] = "EQUAL";
    SplitType["EXACT"] = "EXACT";
    SplitType["PERCENTAGE"] = "PERCENTAGE";
})(SplitType || (exports.SplitType = SplitType = {}));
class Split {
    constructor(user, amount) {
        this.user = user;
        this.amount = amount;
    }
    getUser() {
        return this.user;
    }
    getAmount() {
        return this.amount;
    }
}
exports.Split = Split;
