import { User } from "./user/user";

export class Expense {
    private amount: number;
    private paidBy: User;
    private splitList: Split[];
    private splitType: SplitType;
    constructor(amount: number, paidBy: User, splitList: Split[], splitType: SplitType) {
        this.amount = amount;
        this.paidBy = paidBy;
        this.splitList = splitList;
        this.splitType = splitType;
    }
    getAmount(): number {
        return this.amount;
    }
    getPaidBy(): User {
        return this.paidBy;
    }
    getSplitList(): Split[] {
        return this.splitList;
    }
    getSplitType(): SplitType {
        return this.splitType;
    }
}
export enum SplitType {
    EQUAL = "EQUAL",
    EXACT = "EXACT",
    PERCENTAGE = "PERCENTAGE",
}
export class Split {
    private user: User;
    private amount: number;
    constructor(user: User, amount: number) {
        this.user = user;
        this.amount = amount;
    }
    getUser(): User {
        return this.user;
    }
    getAmount(): number {
        return this.amount;
    }
}