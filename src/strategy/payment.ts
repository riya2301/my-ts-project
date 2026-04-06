import { IPaymentStrategy } from "./paymentStrategyInterface";

export class Payment {
    private strategy: IPaymentStrategy;

    constructor(strategy: IPaymentStrategy) {
        this.strategy = strategy;
    }

    pay(amount: number): void {
        this.strategy.pay(amount);
    }
}