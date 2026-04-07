"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileNotification = void 0;
class MobileNotification {
    constructor(phoneNumber, IStockOservable) {
        this.phoneNumber = phoneNumber;
        this.IStockOservable = IStockOservable;
        this.phoneNumber = phoneNumber;
    }
    sendNotification(message) {
        console.log(`Sending notification to ${this.phoneNumber}: ${message}`);
    }
    update(stockPrice) {
        this.sendNotification(`Stock price is ${stockPrice}`);
    }
}
exports.MobileNotification = MobileNotification;
