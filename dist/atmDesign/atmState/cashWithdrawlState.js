"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashWithdrawlState = void 0;
const atmstate_1 = require("./atmstate");
const idleState_1 = require("./idleState");
const cashWithdrawalProcessor_1 = require("../amountWithdrawl/cashWithdrawalProcessor");
class CashWithdrawlState extends atmstate_1.ATMState {
    withdraw(atm, amount, card, user) {
        console.log(`Withdrawing ${amount} from ATM`);
        if (user.getBalance() >= amount) {
            user.setBalance(user.getBalance() - amount);
            atm.setBalance(atm.getBalance() - amount);
            new cashWithdrawalProcessor_1.CashWithdrawalProcessorChain().processAmount(amount);
            console.log(`Withdrawn ${amount} from ATM`);
        }
        else {
            console.log("Insufficient balance");
            this.ejectCard(atm);
        }
    }
    ejectCard(atm) {
        console.log("Card ejected");
        atm.setState(new idleState_1.IdleState());
    }
}
exports.CashWithdrawlState = CashWithdrawlState;
