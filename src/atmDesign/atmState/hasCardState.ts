import { ATMState } from "./atmstate";
import { ATM } from "../atm";
import { IdleState } from "./idleState";
import { Card } from "../card";
import { SelectOperationState } from "./selectOperationState";
export class HasCardState extends ATMState {
    authenticatePin( atm: ATM, pin: string , card: Card): void {
        if(card.isCorrectPin(pin)) {
            console.log("Pin authenticated");
            atm.setState(new SelectOperationState());
        } else {
            console.log("Pin incorrect");
            this.ejectCard( atm );
        }
    }
    ejectCard( atm: ATM ): void {
        console.log("Card ejected");
        atm.setState(new IdleState());
    }
}