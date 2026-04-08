import { Balance } from "../balance";
import { UserExpenseBalanceSheet } from "../userExpenseBalanceSheet";

export class User {
    private name: string;
    private phone: string;
    userExpenseBalanceSheet: UserExpenseBalanceSheet;
    constructor(name: string, phone: string) {
        this.name = name;
        this.phone = phone;
        this.userExpenseBalanceSheet = new UserExpenseBalanceSheet(this.name, new Map<User, Balance>(), 0, 0, 0);
    }
    getName(): string {
        return this.name;
    }
    getPhone(): string {
        return this.phone;
    }
    getUserExpenseBalanceSheet(): UserExpenseBalanceSheet {
        return this.userExpenseBalanceSheet;
    }
    setUserExpenseBalanceSheet(userExpenseBalanceSheet: UserExpenseBalanceSheet): void {
        this.userExpenseBalanceSheet = userExpenseBalanceSheet;
    }
    addBalance(user: User, balance: Balance): void {
        this.userExpenseBalanceSheet.addBalance(user, balance);
    }
    removeBalance(user: User): void {
        this.userExpenseBalanceSheet.removeBalance(user);
    }
    getBalance(user: User): Balance {
        return this.userExpenseBalanceSheet.getBalance(user);
    }
    getTotalExpense(): number {
        return this.userExpenseBalanceSheet.getTotalExpense();
    }
    getTotalAmountGet(): number {
        return this.userExpenseBalanceSheet.getTotalAmountGet();
    }
    getTotalAmountOwed(): number {
        return this.userExpenseBalanceSheet.getTotalAmountOwed();
    }
    getUserVsBalanceSheet(): Map<User, Balance> {
        return this.userExpenseBalanceSheet.getUserVsBalanceSheet();
    }
}