import { IStockOservable } from "../observable/stocksObserable";
import { IStockObserver } from "./stockObserver";

export class EmailNotification implements IStockObserver{
    private IStockOservable: IStockOservable;
    constructor(private email: string, IStockOservable: IStockOservable) {
        this.IStockOservable = IStockOservable;
        this.email = email;
    }

    sendNotification(message: string): void {
        console.log(`Sending notification to ${this.email}: ${message}`);
    }

    update(stockPrice: number): void {
        this.sendNotification(`Stock price is ${stockPrice}`);
    }
}