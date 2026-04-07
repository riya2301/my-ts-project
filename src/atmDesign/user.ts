import { Card } from "./card";

export class User {
    private name: string;
    private accountNumber: string;
    private balance: number;
    private card: Card;

    constructor(name: string, accountNumber: string, balance: number, card: Card) {
        this.name = name;
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.card = card;
    }

    getName(): string {
        return this.name;
    }

    getAccountNumber(): string {
        return this.accountNumber;
    }
    
    getBalance(): number {
        return this.balance;
    }

    getCard(): Card {
        return this.card;
    }

    setBalance(balance: number): void {
        this.balance = balance;
    }
    
    setCard(card: Card): void {
        this.card = card;
    }

    setAccountNumber(accountNumber: string): void {
        this.accountNumber = accountNumber;
    }
    
    setName(name: string): void {
        this.name = name;
    }
}