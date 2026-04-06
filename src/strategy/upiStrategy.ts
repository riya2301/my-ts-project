import { IPaymentStrategy } from "./paymentStrategyInterface";

export class UpiStrategy implements IPaymentStrategy {
    pay(amount: number): void {
        console.log(`Paying ${amount} via UPI`);
    }
}