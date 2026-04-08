import { Expense, Split, SplitType } from "./expense";
import { User } from "./user/user";

export class BalanceSheetController {
    updateBalanceSheet(expense: Expense, paidBy: User, splitList: Split[], splitType: SplitType = SplitType.EQUAL): void {
        const amount = expense.getAmount();

        paidBy.getUserExpenseBalanceSheet().addToTotalExpense(amount);

        if (splitType === SplitType.EQUAL) {
            if (splitList.length === 0) {
                return;
            }
            const splitAmount = amount / splitList.length;
            splitList.forEach((split) => {
                this.updateBalancesForUser(paidBy, split.getUser(), splitAmount);
            });
            return;
        }

        if (splitType === SplitType.EXACT) {
            splitList.forEach((split) => {
                this.updateBalancesForUser(paidBy, split.getUser(), split.getAmount());
            });
            return;
        }

        throw new Error(`Unsupported split type: ${splitType}`);
    }

    private updateBalancesForUser(paidBy: User, user: User, owedAmount: number): void {
        if (user === paidBy) {
            return;
        }

        paidBy.getUserExpenseBalanceSheet().addOrUpdateBalance(user, owedAmount, 0);
        paidBy.getUserExpenseBalanceSheet().addToTotalAmountGet(owedAmount);

        user.getUserExpenseBalanceSheet().addOrUpdateBalance(paidBy, 0, owedAmount);
        user.getUserExpenseBalanceSheet().addToTotalAmountOwed(owedAmount);
    }
}