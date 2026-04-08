import { Expense } from "../expense";
import { Group } from "./group";

export class GroupController {
    private groupList: Group[];
    constructor(groupList: Group[]) {
        this.groupList = groupList;
    }
    addGroup(group: Group): void {
        this.groupList.push(group);
    }
    getGroupList(): Group[] {
        return this.groupList;
    }
}