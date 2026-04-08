import { BalanceSheetController } from "./balanceSheetController";
import { Expense, Split, SplitType } from "./expense";
import { User } from "./user/user";

export class ExpenseController {
    private expenseList: Expense[];
    constructor(expenseList: Expense[]) {
        this.expenseList = expenseList;
    }
    addExpense(expense: Expense): void {
        this.expenseList.push(expense);
    }
    getExpenseList(): Expense[] {
        return this.expenseList;
    }
    createExpense(amount: number, paidBy: User, splitList: Split[], splitType: SplitType): Expense {
       let expense = new Expense(amount, paidBy, splitList, splitType);
       this.expenseList.push(expense);
       new BalanceSheetController().updateBalanceSheet(expense, paidBy, splitList, splitType);
       return expense;
    }
}
