import { IPaymentStrategy } from "./paymentStrategyInterface";

export class CardStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ${amount} via Card`);
    }
}