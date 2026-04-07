import { User } from "./user";
import { UseBankAccount } from "./useBankAccount";

export class Card {
    private cardNumber: string;
    private cardHolderName: string;
    private pin: string;
    private account: UseBankAccount;

    constructor(cardNumber: string, cardHolderName: string,balance: number) {
        this.cardNumber = cardNumber;
        this.cardHolderName = cardHolderName;
        this.pin = "111";
        this.account = new UseBankAccount(balance);

    }

    getCardNumber(): string {
        return this.cardNumber;
    }

    getCardHolderName(): string {
        return this.cardHolderName;
    }
    
    setCardNumber(cardNumber: string): void {
        this.cardNumber = cardNumber;
    }
    setCardHolderName(cardHolderName: string): void {
        this.cardHolderName = cardHolderName;
    }
    isCorrectPin(pin: string): boolean {
        return pin === this.pin;
    }
}