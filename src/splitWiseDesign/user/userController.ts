import { User } from "./user";
import { UserExpenseBalanceSheet } from "../userExpenseBalanceSheet";

export class UserController {
    private userList: User[];
    constructor(userList: User[]) {
        this.userList = userList;
    }
    addUser(user: User): void {
        this.userList.push(user);
    }
    getUserList(): User[] {
        return this.userList;
    }
    getUserExpenseBalanceSheet(user: User): UserExpenseBalanceSheet {
        return user.userExpenseBalanceSheet;
    }
}