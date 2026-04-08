"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BalanceSheetController = void 0;
const expense_1 = require("./expense");
class BalanceSheetController {
    updateBalanceSheet(expense, paidBy, splitList, splitType = expense_1.SplitType.EQUAL) {
        const amount = expense.getAmount();
        paidBy.getUserExpenseBalanceSheet().addToTotalExpense(amount);
        if (splitType === expense_1.SplitType.EQUAL) {
            if (splitList.length === 0) {
                return;
            }
            const splitAmount = amount / splitList.length;
            splitList.forEach((split) => {
                this.updateBalancesForUser(paidBy, split.getUser(), splitAmount);
            });
            return;
        }
        if (splitType === expense_1.SplitType.EXACT) {
            splitList.forEach((split) => {
                this.updateBalancesForUser(paidBy, split.getUser(), split.getAmount());
            });
            return;
        }
        throw new Error(`Unsupported split type: ${splitType}`);
    }
    updateBalancesForUser(paidBy, user, owedAmount) {
        if (user === paidBy) {
            return;
        }
        paidBy.getUserExpenseBalanceSheet().addOrUpdateBalance(user, owedAmount, 0);
        paidBy.getUserExpenseBalanceSheet().addToTotalAmountGet(owedAmount);
        user.getUserExpenseBalanceSheet().addOrUpdateBalance(paidBy, 0, owedAmount);
        user.getUserExpenseBalanceSheet().addToTotalAmountOwed(owedAmount);
    }
}
exports.BalanceSheetController = BalanceSheetController;
