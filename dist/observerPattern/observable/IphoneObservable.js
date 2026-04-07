"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IphoneObservable = void 0;
class IphoneObservable {
    constructor() {
        this.observers = [];
        this.stockPrice = 0;
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }
    notifyObservers() {
        this.observers.forEach(observer => observer.update(this.stockPrice));
    }
    getStockPrice() {
        return Math.random() * 100;
    }
    setStockPrice(stockPrice) {
        this.stockPrice = stockPrice;
        this.notifyObservers();
    }
}
exports.IphoneObservable = IphoneObservable;
