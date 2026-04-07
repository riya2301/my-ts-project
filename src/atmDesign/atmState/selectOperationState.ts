import { ATM } from "../atm";
import { ATMState } from "./atmstate";
import { TransactionType } from "../transactionTypes";
import { CashWithdrawlState } from "./cashWithdrawlState";
import { IdleState } from "./idleState";
export class SelectOperationState extends ATMState {
    selectOperation( atm: ATM, transactionType: TransactionType): void {
        console.log("Operation selected");
        switch(transactionType) {
            case TransactionType.WITHDRAW:
                atm.setState(new CashWithdrawlState());
                break;
            case TransactionType.BALANCE_INQUIRY:
                // atm.setState(new CashInquiryState());
                break;
            default:
                console.log("Invalid transaction type");
                this.ejectCard( atm );
                break;
        }
    }
    ejectCard( atm: ATM ): void {
        console.log("Card ejected");
        atm.setState(new IdleState());
    }
}