import { User } from "./user";

export class UseBankAccount {
    private balance: number;

    constructor( balance: number) {
        this.balance = balance;
    }


    getBalance(): number {
        return this.balance;
    }

    setBalance(balance: number): void {
        this.balance = balance;
    }
}