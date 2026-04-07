"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectOperationState = void 0;
const atmstate_1 = require("./atmstate");
const transactionTypes_1 = require("../transactionTypes");
const cashWithdrawlState_1 = require("./cashWithdrawlState");
const idleState_1 = require("./idleState");
class SelectOperationState extends atmstate_1.ATMState {
    selectOperation(atm, transactionType) {
        console.log("Operation selected");
        switch (transactionType) {
            case transactionTypes_1.TransactionType.WITHDRAW:
                atm.setState(new cashWithdrawlState_1.CashWithdrawlState());
                break;
            case transactionTypes_1.TransactionType.BALANCE_INQUIRY:
                // atm.setState(new CashInquiryState());
                break;
            default:
                console.log("Invalid transaction type");
                this.ejectCard(atm);
                break;
        }
    }
    ejectCard(atm) {
        console.log("Card ejected");
        atm.setState(new idleState_1.IdleState());
    }
}
exports.SelectOperationState = SelectOperationState;
