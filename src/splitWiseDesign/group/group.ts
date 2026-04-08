import { User } from "../user/user";
import { Expense } from "../expense";

export class Group {
    private groupId: string;
    private groupName: string;
    private groupMembers: User[];
    private groupExpenses: Expense[];
    constructor(groupId: string, groupName: string, groupMembers: User[], groupExpenses: Expense[]) {
        this.groupId = groupId;
        this.groupName = groupName;
        this.groupMembers = groupMembers;
        this.groupExpenses = groupExpenses;
    }
}