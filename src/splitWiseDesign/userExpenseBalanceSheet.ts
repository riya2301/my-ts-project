import { Balance } from "./balance";
import { User } from "./user/user";

export class UserExpenseBalanceSheet {
    private userId: string;
    private userVsBalanceSheet: Map<User, Balance>;
    private totalExpense: number;
    totalAmountGet: number;
    totalAmountOwed: number;
    constructor(userId: string, userVsBalanceSheet: Map<User, Balance>, totalExpense: number, totalAmountGet: number, totalAmountOwed: number) {
        this.userId = userId;
        this.userVsBalanceSheet = userVsBalanceSheet;
        this.totalExpense = totalExpense;
        this.totalAmountGet = totalAmountGet;
        this.totalAmountOwed = totalAmountOwed;
    }
    getUserVsBalanceSheet(): Map<User, Balance> {
        return this.userVsBalanceSheet;
    }
    getTotalExpense(): number {
        return this.totalExpense;
    }
    getTotalAmountGet(): number {
        return this.totalAmountGet;
    }
    getTotalAmountOwed(): number {
        return this.totalAmountOwed;
    }
    addBalance(user: User, balance: Balance): void {
        this.userVsBalanceSheet.set(user, balance);
    }
    addOrUpdateBalance(user: User, amountGetDelta: number, amountOwedDelta: number): void {
        const balance = this.getBalance(user);
        balance.increaseAmountGet(amountGetDelta);
        balance.increaseAmountOwed(amountOwedDelta);
        this.userVsBalanceSheet.set(user, balance);
    }
    removeBalance(user: User): void {
        this.userVsBalanceSheet.delete(user);
    }
    getBalance(user: User): Balance {
        return this.userVsBalanceSheet.get(user) ?? new Balance(0, 0);
    }
    addToTotalExpense(amount: number): void {
        this.totalExpense += amount;
    }
    addToTotalAmountGet(amount: number): void {
        this.totalAmountGet += amount;
    }
    addToTotalAmountOwed(amount: number): void {
        this.totalAmountOwed += amount;
    }
}