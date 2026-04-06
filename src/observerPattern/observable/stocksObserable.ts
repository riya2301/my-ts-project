import { IStockObserver } from "../observers/stockObserver";

export interface IStockOservable{
    addObserver(observer: IStockObserver): void;
    removeObserver(observer: IStockObserver): void;
    notifyObservers(): void;
    getStockPrice(): number;
}