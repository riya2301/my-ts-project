import { IStockObserver } from "../observers/stockObserver";
import { IStockOservable } from "./stocksObserable";

export class IphoneObservable implements IStockOservable{
    private observers: IStockObserver[] = [];
    private stockPrice: number = 0;

    addObserver(observer: IStockObserver): void {
        this.observers.push(observer);
    }

    removeObserver(observer: IStockObserver): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    notifyObservers(): void {
        this.observers.forEach(observer => observer.update(this.stockPrice));
    }

    getStockPrice(): number {
        return Math.random() * 100;
    }

    setStockPrice(stockPrice: number): void {
        this.stockPrice = stockPrice;
        this.notifyObservers();
    }
}