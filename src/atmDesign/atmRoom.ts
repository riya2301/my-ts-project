import { ATM } from "./atm";
import { IdleState } from "./atmState/idleState";
import { Card } from "./card";
import { User } from "./user";

export class ATMRoom {
    atm: ATM;
    user: User;
    constructor() {
        this.atm = new ATM();
        this.user = new User("John Doe", "1234567890", 30000, new Card("1234567890", "John Doe", 30000));
        this.initialize();
    }
    private initialize(): void {
        console.log(`Welcome ${this.user.getName()} to the ATM Room`);
    }
}
