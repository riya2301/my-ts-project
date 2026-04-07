import { ATM } from "../atm";
import { IdleState } from "./idleState";    
import { Card } from "../card";
import { User } from "../user";
import { TransactionType } from "../transactionTypes";
export abstract class ATMState {
    insertCard( atm: ATM, card: Card ): void{
        console.log("Card inserted1");
    };
    authenticatePin( atm: ATM, pin: string , card: Card): void{
        console.log("Pin authenticated1");
    };
    withdraw( atm: ATM, amount: number , card: Card, user: User): void{
        console.log("Withdrawing amount1");
    };
    deposit( atm: ATM, amount: number , card: Card, user: User): void{
        console.log("Depositing amount1");
    };
    selectOperation( atm: ATM, transactionType: TransactionType): void{
        console.log("Operation selected1");
    };
    ejectCard( atm: ATM ): void{
        atm.setState(new IdleState());
    };
    insertPin(): void{
        console.log("Pin inserted1");
    };
    enterPin(): void{
        console.log("Pin entered1");
    };
    enterAmount( atm: ATM, amount: number ): void{
        console.log("Amount entered1");
    };
    dispenseCash(): void{
        console.log("Cash dispensed1");
    };
}