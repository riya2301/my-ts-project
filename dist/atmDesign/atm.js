"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ATM = void 0;
const idleState_1 = require("./atmState/idleState");
class ATM {
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    constructor() {
        this.state = new idleState_1.IdleState();
        this.atmBalance = 100000;
        this.noOfThousandNotes = 100;
        this.noOfFiveHundredNotes = 100;
        this.noOfHundredNotes = 100;
    }
    getBalance() {
        return this.atmBalance;
    }
    setBalance(balance) {
        this.atmBalance = balance;
    }
}
exports.ATM = ATM;
