import { IStockObserver } from "./stockObserver";
import { IStockOservable } from "../observable/stocksObserable";

export class MobileNotification implements IStockObserver{
    private IStockOservable: IStockOservable;
    constructor(private phoneNumber: string, IStockOservable: IStockOservable) {
        this.IStockOservable = IStockOservable;
        this.phoneNumber = phoneNumber;
    }

    sendNotification(message: string): void {
        console.log(`Sending notification to ${this.phoneNumber}: ${message}`);
    }

    update(stockPrice: number): void {
        this.sendNotification(`Stock price is ${stockPrice}`);
    }
}