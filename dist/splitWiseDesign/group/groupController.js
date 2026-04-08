"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupController = void 0;
class GroupController {
    constructor(groupList) {
        this.groupList = groupList;
    }
    addGroup(group) {
        this.groupList.push(group);
    }
    getGroupList() {
        return this.groupList;
    }
}
exports.GroupController = GroupController;
