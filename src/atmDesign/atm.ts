import { IdleState } from "./atmState/idleState";
import { ATMState } from "./atmState/atmstate";
export class ATM {
    private state: ATMState;    
    private atmBalance: number;
    private noOfThousandNotes: number;
    private noOfFiveHundredNotes: number;
    private noOfHundredNotes: number;

    setState(state: ATMState): void {
        this.state = state;
    }
    getState(): ATMState {
        return this.state;
    }
    constructor() {
        this.state = new IdleState();
        this.atmBalance = 100000;
        this.noOfThousandNotes = 100;
        this.noOfFiveHundredNotes = 100;
        this.noOfHundredNotes = 100;
    }

    getBalance(): number {
        return this.atmBalance;
    }
    setBalance(balance: number): void {
        this.atmBalance = balance;
    }
}