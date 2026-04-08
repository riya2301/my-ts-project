"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseController = void 0;
const balanceSheetController_1 = require("./balanceSheetController");
const expense_1 = require("./expense");
class ExpenseController {
    constructor(expenseList) {
        this.expenseList = expenseList;
    }
    addExpense(expense) {
        this.expenseList.push(expense);
    }
    getExpenseList() {
        return this.expenseList;
    }
    createExpense(amount, paidBy, splitList, splitType) {
        let expense = new expense_1.Expense(amount, paidBy, splitList, splitType);
        this.expenseList.push(expense);
        new balanceSheetController_1.BalanceSheetController().updateBalanceSheet(expense, paidBy, splitList, splitType);
        return expense;
    }
}
exports.ExpenseController = ExpenseController;
