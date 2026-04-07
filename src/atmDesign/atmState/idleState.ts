import { HasCardState } from "./hasCardState";
import { ATMState } from "./atmstate";
import { ATM } from "../atm";
import { Card } from "../card";

export class IdleState extends ATMState {
    insertCard( atm: ATM, card: Card ): void {
        console.log("Card inserted");
        atm.setState(new HasCardState());
    }
}