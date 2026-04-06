import { IPaymentStrategy } from "./paymentStrategyInterface";
import { Payment } from "./payment";
import { UpiStrategy } from "./upiStrategy";


export class UpiPayment extends Payment {

    constructor() {
        super(new UpiStrategy());
    }
}