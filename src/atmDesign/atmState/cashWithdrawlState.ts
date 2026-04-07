import { ATM } from "../atm";
import { ATMState } from "./atmstate";
import { IdleState } from "./idleState";
import { CashWithdrawalProcessorChain } from "../amountWithdrawl/cashWithdrawalProcessor";
import { Card } from "../card";
import { User } from "../user";
export class CashWithdrawlState extends ATMState {
   
    withdraw( atm: ATM, amount: number , card: Card, user: User): void {
        console.log(`Withdrawing ${amount} from ATM`);
        if(user.getBalance() >= amount) {
            user.setBalance(user.getBalance() - amount);
            atm.setBalance(atm.getBalance() - amount);
            new CashWithdrawalProcessorChain().processAmount(amount);
            console.log(`Withdrawn ${amount} from ATM`);
        } else {
            console.log("Insufficient balance");
            this.ejectCard( atm );
        }
    }
    ejectCard( atm: ATM ): void {
        console.log("Card ejected");
        atm.setState(new IdleState());
    }
}